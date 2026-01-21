'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13515<T> = T extends (infer U)[]
  ? DeepReadonlyArray13515<U>
  : T extends object
  ? DeepReadonlyObject13515<T>
  : T;

interface DeepReadonlyArray13515<T> extends ReadonlyArray<DeepReadonly13515<T>> {}

type DeepReadonlyObject13515<T> = {
  readonly [P in keyof T]: DeepReadonly13515<T[P]>;
};

type UnionToIntersection13515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13515<T> = UnionToIntersection13515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13515<T extends unknown[], V> = [...T, V];

type TuplifyUnion13515<T, L = LastOf13515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13515<TuplifyUnion13515<Exclude<T, L>>, L>;

type DeepPartial13515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13515<T[P]> }
  : T;

type Paths13515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13515<K, Paths13515<T[K], Prev13515[D]>> : never }[keyof T]
  : never;

type Prev13515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13515 {
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

type ConfigPaths13515 = Paths13515<NestedConfig13515>;

interface HeavyProps13515 {
  config: DeepPartial13515<NestedConfig13515>;
  path?: ConfigPaths13515;
}

const HeavyComponent13515 = memo(function HeavyComponent13515({ config }: HeavyProps13515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13515.displayName = 'HeavyComponent13515';
export default HeavyComponent13515;
