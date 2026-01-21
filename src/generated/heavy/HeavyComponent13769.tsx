'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13769<T> = T extends (infer U)[]
  ? DeepReadonlyArray13769<U>
  : T extends object
  ? DeepReadonlyObject13769<T>
  : T;

interface DeepReadonlyArray13769<T> extends ReadonlyArray<DeepReadonly13769<T>> {}

type DeepReadonlyObject13769<T> = {
  readonly [P in keyof T]: DeepReadonly13769<T[P]>;
};

type UnionToIntersection13769<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13769<T> = UnionToIntersection13769<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13769<T extends unknown[], V> = [...T, V];

type TuplifyUnion13769<T, L = LastOf13769<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13769<TuplifyUnion13769<Exclude<T, L>>, L>;

type DeepPartial13769<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13769<T[P]> }
  : T;

type Paths13769<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13769<K, Paths13769<T[K], Prev13769[D]>> : never }[keyof T]
  : never;

type Prev13769 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13769<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13769 {
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

type ConfigPaths13769 = Paths13769<NestedConfig13769>;

interface HeavyProps13769 {
  config: DeepPartial13769<NestedConfig13769>;
  path?: ConfigPaths13769;
}

const HeavyComponent13769 = memo(function HeavyComponent13769({ config }: HeavyProps13769) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13769) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13769 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13769: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13769.displayName = 'HeavyComponent13769';
export default HeavyComponent13769;
