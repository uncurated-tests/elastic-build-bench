'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13892<T> = T extends (infer U)[]
  ? DeepReadonlyArray13892<U>
  : T extends object
  ? DeepReadonlyObject13892<T>
  : T;

interface DeepReadonlyArray13892<T> extends ReadonlyArray<DeepReadonly13892<T>> {}

type DeepReadonlyObject13892<T> = {
  readonly [P in keyof T]: DeepReadonly13892<T[P]>;
};

type UnionToIntersection13892<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13892<T> = UnionToIntersection13892<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13892<T extends unknown[], V> = [...T, V];

type TuplifyUnion13892<T, L = LastOf13892<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13892<TuplifyUnion13892<Exclude<T, L>>, L>;

type DeepPartial13892<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13892<T[P]> }
  : T;

type Paths13892<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13892<K, Paths13892<T[K], Prev13892[D]>> : never }[keyof T]
  : never;

type Prev13892 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13892<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13892 {
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

type ConfigPaths13892 = Paths13892<NestedConfig13892>;

interface HeavyProps13892 {
  config: DeepPartial13892<NestedConfig13892>;
  path?: ConfigPaths13892;
}

const HeavyComponent13892 = memo(function HeavyComponent13892({ config }: HeavyProps13892) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13892) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13892 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13892: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13892.displayName = 'HeavyComponent13892';
export default HeavyComponent13892;
