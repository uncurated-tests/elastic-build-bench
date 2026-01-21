'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13052<T> = T extends (infer U)[]
  ? DeepReadonlyArray13052<U>
  : T extends object
  ? DeepReadonlyObject13052<T>
  : T;

interface DeepReadonlyArray13052<T> extends ReadonlyArray<DeepReadonly13052<T>> {}

type DeepReadonlyObject13052<T> = {
  readonly [P in keyof T]: DeepReadonly13052<T[P]>;
};

type UnionToIntersection13052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13052<T> = UnionToIntersection13052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13052<T extends unknown[], V> = [...T, V];

type TuplifyUnion13052<T, L = LastOf13052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13052<TuplifyUnion13052<Exclude<T, L>>, L>;

type DeepPartial13052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13052<T[P]> }
  : T;

type Paths13052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13052<K, Paths13052<T[K], Prev13052[D]>> : never }[keyof T]
  : never;

type Prev13052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13052 {
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

type ConfigPaths13052 = Paths13052<NestedConfig13052>;

interface HeavyProps13052 {
  config: DeepPartial13052<NestedConfig13052>;
  path?: ConfigPaths13052;
}

const HeavyComponent13052 = memo(function HeavyComponent13052({ config }: HeavyProps13052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13052.displayName = 'HeavyComponent13052';
export default HeavyComponent13052;
