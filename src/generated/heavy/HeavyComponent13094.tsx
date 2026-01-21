'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13094<T> = T extends (infer U)[]
  ? DeepReadonlyArray13094<U>
  : T extends object
  ? DeepReadonlyObject13094<T>
  : T;

interface DeepReadonlyArray13094<T> extends ReadonlyArray<DeepReadonly13094<T>> {}

type DeepReadonlyObject13094<T> = {
  readonly [P in keyof T]: DeepReadonly13094<T[P]>;
};

type UnionToIntersection13094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13094<T> = UnionToIntersection13094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13094<T extends unknown[], V> = [...T, V];

type TuplifyUnion13094<T, L = LastOf13094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13094<TuplifyUnion13094<Exclude<T, L>>, L>;

type DeepPartial13094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13094<T[P]> }
  : T;

type Paths13094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13094<K, Paths13094<T[K], Prev13094[D]>> : never }[keyof T]
  : never;

type Prev13094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13094 {
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

type ConfigPaths13094 = Paths13094<NestedConfig13094>;

interface HeavyProps13094 {
  config: DeepPartial13094<NestedConfig13094>;
  path?: ConfigPaths13094;
}

const HeavyComponent13094 = memo(function HeavyComponent13094({ config }: HeavyProps13094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13094.displayName = 'HeavyComponent13094';
export default HeavyComponent13094;
