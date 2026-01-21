'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13724<T> = T extends (infer U)[]
  ? DeepReadonlyArray13724<U>
  : T extends object
  ? DeepReadonlyObject13724<T>
  : T;

interface DeepReadonlyArray13724<T> extends ReadonlyArray<DeepReadonly13724<T>> {}

type DeepReadonlyObject13724<T> = {
  readonly [P in keyof T]: DeepReadonly13724<T[P]>;
};

type UnionToIntersection13724<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13724<T> = UnionToIntersection13724<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13724<T extends unknown[], V> = [...T, V];

type TuplifyUnion13724<T, L = LastOf13724<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13724<TuplifyUnion13724<Exclude<T, L>>, L>;

type DeepPartial13724<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13724<T[P]> }
  : T;

type Paths13724<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13724<K, Paths13724<T[K], Prev13724[D]>> : never }[keyof T]
  : never;

type Prev13724 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13724<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13724 {
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

type ConfigPaths13724 = Paths13724<NestedConfig13724>;

interface HeavyProps13724 {
  config: DeepPartial13724<NestedConfig13724>;
  path?: ConfigPaths13724;
}

const HeavyComponent13724 = memo(function HeavyComponent13724({ config }: HeavyProps13724) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13724) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13724 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13724: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13724.displayName = 'HeavyComponent13724';
export default HeavyComponent13724;
