'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13038<T> = T extends (infer U)[]
  ? DeepReadonlyArray13038<U>
  : T extends object
  ? DeepReadonlyObject13038<T>
  : T;

interface DeepReadonlyArray13038<T> extends ReadonlyArray<DeepReadonly13038<T>> {}

type DeepReadonlyObject13038<T> = {
  readonly [P in keyof T]: DeepReadonly13038<T[P]>;
};

type UnionToIntersection13038<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13038<T> = UnionToIntersection13038<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13038<T extends unknown[], V> = [...T, V];

type TuplifyUnion13038<T, L = LastOf13038<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13038<TuplifyUnion13038<Exclude<T, L>>, L>;

type DeepPartial13038<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13038<T[P]> }
  : T;

type Paths13038<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13038<K, Paths13038<T[K], Prev13038[D]>> : never }[keyof T]
  : never;

type Prev13038 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13038<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13038 {
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

type ConfigPaths13038 = Paths13038<NestedConfig13038>;

interface HeavyProps13038 {
  config: DeepPartial13038<NestedConfig13038>;
  path?: ConfigPaths13038;
}

const HeavyComponent13038 = memo(function HeavyComponent13038({ config }: HeavyProps13038) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13038) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13038 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13038: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13038.displayName = 'HeavyComponent13038';
export default HeavyComponent13038;
