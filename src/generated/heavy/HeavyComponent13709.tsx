'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13709<T> = T extends (infer U)[]
  ? DeepReadonlyArray13709<U>
  : T extends object
  ? DeepReadonlyObject13709<T>
  : T;

interface DeepReadonlyArray13709<T> extends ReadonlyArray<DeepReadonly13709<T>> {}

type DeepReadonlyObject13709<T> = {
  readonly [P in keyof T]: DeepReadonly13709<T[P]>;
};

type UnionToIntersection13709<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13709<T> = UnionToIntersection13709<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13709<T extends unknown[], V> = [...T, V];

type TuplifyUnion13709<T, L = LastOf13709<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13709<TuplifyUnion13709<Exclude<T, L>>, L>;

type DeepPartial13709<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13709<T[P]> }
  : T;

type Paths13709<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13709<K, Paths13709<T[K], Prev13709[D]>> : never }[keyof T]
  : never;

type Prev13709 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13709<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13709 {
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

type ConfigPaths13709 = Paths13709<NestedConfig13709>;

interface HeavyProps13709 {
  config: DeepPartial13709<NestedConfig13709>;
  path?: ConfigPaths13709;
}

const HeavyComponent13709 = memo(function HeavyComponent13709({ config }: HeavyProps13709) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13709) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13709 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13709: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13709.displayName = 'HeavyComponent13709';
export default HeavyComponent13709;
