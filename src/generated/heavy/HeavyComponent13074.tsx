'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13074<T> = T extends (infer U)[]
  ? DeepReadonlyArray13074<U>
  : T extends object
  ? DeepReadonlyObject13074<T>
  : T;

interface DeepReadonlyArray13074<T> extends ReadonlyArray<DeepReadonly13074<T>> {}

type DeepReadonlyObject13074<T> = {
  readonly [P in keyof T]: DeepReadonly13074<T[P]>;
};

type UnionToIntersection13074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13074<T> = UnionToIntersection13074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13074<T extends unknown[], V> = [...T, V];

type TuplifyUnion13074<T, L = LastOf13074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13074<TuplifyUnion13074<Exclude<T, L>>, L>;

type DeepPartial13074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13074<T[P]> }
  : T;

type Paths13074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13074<K, Paths13074<T[K], Prev13074[D]>> : never }[keyof T]
  : never;

type Prev13074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13074 {
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

type ConfigPaths13074 = Paths13074<NestedConfig13074>;

interface HeavyProps13074 {
  config: DeepPartial13074<NestedConfig13074>;
  path?: ConfigPaths13074;
}

const HeavyComponent13074 = memo(function HeavyComponent13074({ config }: HeavyProps13074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13074.displayName = 'HeavyComponent13074';
export default HeavyComponent13074;
