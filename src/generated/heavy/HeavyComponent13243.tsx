'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13243<T> = T extends (infer U)[]
  ? DeepReadonlyArray13243<U>
  : T extends object
  ? DeepReadonlyObject13243<T>
  : T;

interface DeepReadonlyArray13243<T> extends ReadonlyArray<DeepReadonly13243<T>> {}

type DeepReadonlyObject13243<T> = {
  readonly [P in keyof T]: DeepReadonly13243<T[P]>;
};

type UnionToIntersection13243<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13243<T> = UnionToIntersection13243<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13243<T extends unknown[], V> = [...T, V];

type TuplifyUnion13243<T, L = LastOf13243<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13243<TuplifyUnion13243<Exclude<T, L>>, L>;

type DeepPartial13243<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13243<T[P]> }
  : T;

type Paths13243<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13243<K, Paths13243<T[K], Prev13243[D]>> : never }[keyof T]
  : never;

type Prev13243 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13243<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13243 {
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

type ConfigPaths13243 = Paths13243<NestedConfig13243>;

interface HeavyProps13243 {
  config: DeepPartial13243<NestedConfig13243>;
  path?: ConfigPaths13243;
}

const HeavyComponent13243 = memo(function HeavyComponent13243({ config }: HeavyProps13243) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13243) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13243 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13243: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13243.displayName = 'HeavyComponent13243';
export default HeavyComponent13243;
