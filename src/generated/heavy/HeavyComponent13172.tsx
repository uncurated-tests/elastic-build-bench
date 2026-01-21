'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13172<T> = T extends (infer U)[]
  ? DeepReadonlyArray13172<U>
  : T extends object
  ? DeepReadonlyObject13172<T>
  : T;

interface DeepReadonlyArray13172<T> extends ReadonlyArray<DeepReadonly13172<T>> {}

type DeepReadonlyObject13172<T> = {
  readonly [P in keyof T]: DeepReadonly13172<T[P]>;
};

type UnionToIntersection13172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13172<T> = UnionToIntersection13172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13172<T extends unknown[], V> = [...T, V];

type TuplifyUnion13172<T, L = LastOf13172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13172<TuplifyUnion13172<Exclude<T, L>>, L>;

type DeepPartial13172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13172<T[P]> }
  : T;

type Paths13172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13172<K, Paths13172<T[K], Prev13172[D]>> : never }[keyof T]
  : never;

type Prev13172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13172 {
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

type ConfigPaths13172 = Paths13172<NestedConfig13172>;

interface HeavyProps13172 {
  config: DeepPartial13172<NestedConfig13172>;
  path?: ConfigPaths13172;
}

const HeavyComponent13172 = memo(function HeavyComponent13172({ config }: HeavyProps13172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13172.displayName = 'HeavyComponent13172';
export default HeavyComponent13172;
