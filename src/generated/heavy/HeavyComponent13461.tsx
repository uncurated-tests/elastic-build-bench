'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13461<T> = T extends (infer U)[]
  ? DeepReadonlyArray13461<U>
  : T extends object
  ? DeepReadonlyObject13461<T>
  : T;

interface DeepReadonlyArray13461<T> extends ReadonlyArray<DeepReadonly13461<T>> {}

type DeepReadonlyObject13461<T> = {
  readonly [P in keyof T]: DeepReadonly13461<T[P]>;
};

type UnionToIntersection13461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13461<T> = UnionToIntersection13461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13461<T extends unknown[], V> = [...T, V];

type TuplifyUnion13461<T, L = LastOf13461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13461<TuplifyUnion13461<Exclude<T, L>>, L>;

type DeepPartial13461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13461<T[P]> }
  : T;

type Paths13461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13461<K, Paths13461<T[K], Prev13461[D]>> : never }[keyof T]
  : never;

type Prev13461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13461 {
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

type ConfigPaths13461 = Paths13461<NestedConfig13461>;

interface HeavyProps13461 {
  config: DeepPartial13461<NestedConfig13461>;
  path?: ConfigPaths13461;
}

const HeavyComponent13461 = memo(function HeavyComponent13461({ config }: HeavyProps13461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13461.displayName = 'HeavyComponent13461';
export default HeavyComponent13461;
