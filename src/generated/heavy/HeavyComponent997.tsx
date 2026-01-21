'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly997<T> = T extends (infer U)[]
  ? DeepReadonlyArray997<U>
  : T extends object
  ? DeepReadonlyObject997<T>
  : T;

interface DeepReadonlyArray997<T> extends ReadonlyArray<DeepReadonly997<T>> {}

type DeepReadonlyObject997<T> = {
  readonly [P in keyof T]: DeepReadonly997<T[P]>;
};

type UnionToIntersection997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf997<T> = UnionToIntersection997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push997<T extends unknown[], V> = [...T, V];

type TuplifyUnion997<T, L = LastOf997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push997<TuplifyUnion997<Exclude<T, L>>, L>;

type DeepPartial997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial997<T[P]> }
  : T;

type Paths997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join997<K, Paths997<T[K], Prev997[D]>> : never }[keyof T]
  : never;

type Prev997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig997 {
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

type ConfigPaths997 = Paths997<NestedConfig997>;

interface HeavyProps997 {
  config: DeepPartial997<NestedConfig997>;
  path?: ConfigPaths997;
}

const HeavyComponent997 = memo(function HeavyComponent997({ config }: HeavyProps997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent997.displayName = 'HeavyComponent997';
export default HeavyComponent997;
