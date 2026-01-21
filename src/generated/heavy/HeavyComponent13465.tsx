'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13465<T> = T extends (infer U)[]
  ? DeepReadonlyArray13465<U>
  : T extends object
  ? DeepReadonlyObject13465<T>
  : T;

interface DeepReadonlyArray13465<T> extends ReadonlyArray<DeepReadonly13465<T>> {}

type DeepReadonlyObject13465<T> = {
  readonly [P in keyof T]: DeepReadonly13465<T[P]>;
};

type UnionToIntersection13465<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13465<T> = UnionToIntersection13465<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13465<T extends unknown[], V> = [...T, V];

type TuplifyUnion13465<T, L = LastOf13465<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13465<TuplifyUnion13465<Exclude<T, L>>, L>;

type DeepPartial13465<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13465<T[P]> }
  : T;

type Paths13465<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13465<K, Paths13465<T[K], Prev13465[D]>> : never }[keyof T]
  : never;

type Prev13465 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13465<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13465 {
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

type ConfigPaths13465 = Paths13465<NestedConfig13465>;

interface HeavyProps13465 {
  config: DeepPartial13465<NestedConfig13465>;
  path?: ConfigPaths13465;
}

const HeavyComponent13465 = memo(function HeavyComponent13465({ config }: HeavyProps13465) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13465) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13465 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13465: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13465.displayName = 'HeavyComponent13465';
export default HeavyComponent13465;
