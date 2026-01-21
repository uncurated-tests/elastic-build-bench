'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13193<T> = T extends (infer U)[]
  ? DeepReadonlyArray13193<U>
  : T extends object
  ? DeepReadonlyObject13193<T>
  : T;

interface DeepReadonlyArray13193<T> extends ReadonlyArray<DeepReadonly13193<T>> {}

type DeepReadonlyObject13193<T> = {
  readonly [P in keyof T]: DeepReadonly13193<T[P]>;
};

type UnionToIntersection13193<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13193<T> = UnionToIntersection13193<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13193<T extends unknown[], V> = [...T, V];

type TuplifyUnion13193<T, L = LastOf13193<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13193<TuplifyUnion13193<Exclude<T, L>>, L>;

type DeepPartial13193<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13193<T[P]> }
  : T;

type Paths13193<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13193<K, Paths13193<T[K], Prev13193[D]>> : never }[keyof T]
  : never;

type Prev13193 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13193<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13193 {
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

type ConfigPaths13193 = Paths13193<NestedConfig13193>;

interface HeavyProps13193 {
  config: DeepPartial13193<NestedConfig13193>;
  path?: ConfigPaths13193;
}

const HeavyComponent13193 = memo(function HeavyComponent13193({ config }: HeavyProps13193) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13193) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13193 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13193: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13193.displayName = 'HeavyComponent13193';
export default HeavyComponent13193;
