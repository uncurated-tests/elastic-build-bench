'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8114<T> = T extends (infer U)[]
  ? DeepReadonlyArray8114<U>
  : T extends object
  ? DeepReadonlyObject8114<T>
  : T;

interface DeepReadonlyArray8114<T> extends ReadonlyArray<DeepReadonly8114<T>> {}

type DeepReadonlyObject8114<T> = {
  readonly [P in keyof T]: DeepReadonly8114<T[P]>;
};

type UnionToIntersection8114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8114<T> = UnionToIntersection8114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8114<T extends unknown[], V> = [...T, V];

type TuplifyUnion8114<T, L = LastOf8114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8114<TuplifyUnion8114<Exclude<T, L>>, L>;

type DeepPartial8114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8114<T[P]> }
  : T;

type Paths8114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8114<K, Paths8114<T[K], Prev8114[D]>> : never }[keyof T]
  : never;

type Prev8114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8114 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8114 = Paths8114<NestedConfig8114>;

interface HeavyProps8114 {
  config: DeepPartial8114<NestedConfig8114>;
  path?: ConfigPaths8114;
}

const HeavyComponent8114 = memo(function HeavyComponent8114({ config }: HeavyProps8114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8114.displayName = 'HeavyComponent8114';
export default HeavyComponent8114;
