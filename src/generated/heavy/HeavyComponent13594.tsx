'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13594<T> = T extends (infer U)[]
  ? DeepReadonlyArray13594<U>
  : T extends object
  ? DeepReadonlyObject13594<T>
  : T;

interface DeepReadonlyArray13594<T> extends ReadonlyArray<DeepReadonly13594<T>> {}

type DeepReadonlyObject13594<T> = {
  readonly [P in keyof T]: DeepReadonly13594<T[P]>;
};

type UnionToIntersection13594<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13594<T> = UnionToIntersection13594<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13594<T extends unknown[], V> = [...T, V];

type TuplifyUnion13594<T, L = LastOf13594<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13594<TuplifyUnion13594<Exclude<T, L>>, L>;

type DeepPartial13594<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13594<T[P]> }
  : T;

type Paths13594<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13594<K, Paths13594<T[K], Prev13594[D]>> : never }[keyof T]
  : never;

type Prev13594 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13594<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13594 {
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

type ConfigPaths13594 = Paths13594<NestedConfig13594>;

interface HeavyProps13594 {
  config: DeepPartial13594<NestedConfig13594>;
  path?: ConfigPaths13594;
}

const HeavyComponent13594 = memo(function HeavyComponent13594({ config }: HeavyProps13594) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13594) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13594 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13594: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13594.displayName = 'HeavyComponent13594';
export default HeavyComponent13594;
