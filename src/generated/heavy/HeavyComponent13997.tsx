'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13997<T> = T extends (infer U)[]
  ? DeepReadonlyArray13997<U>
  : T extends object
  ? DeepReadonlyObject13997<T>
  : T;

interface DeepReadonlyArray13997<T> extends ReadonlyArray<DeepReadonly13997<T>> {}

type DeepReadonlyObject13997<T> = {
  readonly [P in keyof T]: DeepReadonly13997<T[P]>;
};

type UnionToIntersection13997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13997<T> = UnionToIntersection13997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13997<T extends unknown[], V> = [...T, V];

type TuplifyUnion13997<T, L = LastOf13997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13997<TuplifyUnion13997<Exclude<T, L>>, L>;

type DeepPartial13997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13997<T[P]> }
  : T;

type Paths13997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13997<K, Paths13997<T[K], Prev13997[D]>> : never }[keyof T]
  : never;

type Prev13997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13997 {
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

type ConfigPaths13997 = Paths13997<NestedConfig13997>;

interface HeavyProps13997 {
  config: DeepPartial13997<NestedConfig13997>;
  path?: ConfigPaths13997;
}

const HeavyComponent13997 = memo(function HeavyComponent13997({ config }: HeavyProps13997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13997.displayName = 'HeavyComponent13997';
export default HeavyComponent13997;
