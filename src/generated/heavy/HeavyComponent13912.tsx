'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13912<T> = T extends (infer U)[]
  ? DeepReadonlyArray13912<U>
  : T extends object
  ? DeepReadonlyObject13912<T>
  : T;

interface DeepReadonlyArray13912<T> extends ReadonlyArray<DeepReadonly13912<T>> {}

type DeepReadonlyObject13912<T> = {
  readonly [P in keyof T]: DeepReadonly13912<T[P]>;
};

type UnionToIntersection13912<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13912<T> = UnionToIntersection13912<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13912<T extends unknown[], V> = [...T, V];

type TuplifyUnion13912<T, L = LastOf13912<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13912<TuplifyUnion13912<Exclude<T, L>>, L>;

type DeepPartial13912<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13912<T[P]> }
  : T;

type Paths13912<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13912<K, Paths13912<T[K], Prev13912[D]>> : never }[keyof T]
  : never;

type Prev13912 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13912<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13912 {
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

type ConfigPaths13912 = Paths13912<NestedConfig13912>;

interface HeavyProps13912 {
  config: DeepPartial13912<NestedConfig13912>;
  path?: ConfigPaths13912;
}

const HeavyComponent13912 = memo(function HeavyComponent13912({ config }: HeavyProps13912) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13912) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13912 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13912: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13912.displayName = 'HeavyComponent13912';
export default HeavyComponent13912;
