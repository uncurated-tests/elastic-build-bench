'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8<T> = T extends (infer U)[]
  ? DeepReadonlyArray8<U>
  : T extends object
  ? DeepReadonlyObject8<T>
  : T;

interface DeepReadonlyArray8<T> extends ReadonlyArray<DeepReadonly8<T>> {}

type DeepReadonlyObject8<T> = {
  readonly [P in keyof T]: DeepReadonly8<T[P]>;
};

type UnionToIntersection8<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8<T> = UnionToIntersection8<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8<T extends unknown[], V> = [...T, V];

type TuplifyUnion8<T, L = LastOf8<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8<TuplifyUnion8<Exclude<T, L>>, L>;

type DeepPartial8<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8<T[P]> }
  : T;

type Paths8<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8<K, Paths8<T[K], Prev8[D]>> : never }[keyof T]
  : never;

type Prev8 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8 {
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

type ConfigPaths8 = Paths8<NestedConfig8>;

interface HeavyProps8 {
  config: DeepPartial8<NestedConfig8>;
  path?: ConfigPaths8;
}

const HeavyComponent8 = memo(function HeavyComponent8({ config }: HeavyProps8) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8.displayName = 'HeavyComponent8';
export default HeavyComponent8;
