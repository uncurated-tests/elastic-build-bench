'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13384<T> = T extends (infer U)[]
  ? DeepReadonlyArray13384<U>
  : T extends object
  ? DeepReadonlyObject13384<T>
  : T;

interface DeepReadonlyArray13384<T> extends ReadonlyArray<DeepReadonly13384<T>> {}

type DeepReadonlyObject13384<T> = {
  readonly [P in keyof T]: DeepReadonly13384<T[P]>;
};

type UnionToIntersection13384<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13384<T> = UnionToIntersection13384<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13384<T extends unknown[], V> = [...T, V];

type TuplifyUnion13384<T, L = LastOf13384<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13384<TuplifyUnion13384<Exclude<T, L>>, L>;

type DeepPartial13384<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13384<T[P]> }
  : T;

type Paths13384<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13384<K, Paths13384<T[K], Prev13384[D]>> : never }[keyof T]
  : never;

type Prev13384 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13384<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13384 {
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

type ConfigPaths13384 = Paths13384<NestedConfig13384>;

interface HeavyProps13384 {
  config: DeepPartial13384<NestedConfig13384>;
  path?: ConfigPaths13384;
}

const HeavyComponent13384 = memo(function HeavyComponent13384({ config }: HeavyProps13384) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13384) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13384 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13384: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13384.displayName = 'HeavyComponent13384';
export default HeavyComponent13384;
