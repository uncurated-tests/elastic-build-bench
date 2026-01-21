'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8917<T> = T extends (infer U)[]
  ? DeepReadonlyArray8917<U>
  : T extends object
  ? DeepReadonlyObject8917<T>
  : T;

interface DeepReadonlyArray8917<T> extends ReadonlyArray<DeepReadonly8917<T>> {}

type DeepReadonlyObject8917<T> = {
  readonly [P in keyof T]: DeepReadonly8917<T[P]>;
};

type UnionToIntersection8917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8917<T> = UnionToIntersection8917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8917<T extends unknown[], V> = [...T, V];

type TuplifyUnion8917<T, L = LastOf8917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8917<TuplifyUnion8917<Exclude<T, L>>, L>;

type DeepPartial8917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8917<T[P]> }
  : T;

type Paths8917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8917<K, Paths8917<T[K], Prev8917[D]>> : never }[keyof T]
  : never;

type Prev8917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8917 {
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

type ConfigPaths8917 = Paths8917<NestedConfig8917>;

interface HeavyProps8917 {
  config: DeepPartial8917<NestedConfig8917>;
  path?: ConfigPaths8917;
}

const HeavyComponent8917 = memo(function HeavyComponent8917({ config }: HeavyProps8917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8917.displayName = 'HeavyComponent8917';
export default HeavyComponent8917;
