'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13332<T> = T extends (infer U)[]
  ? DeepReadonlyArray13332<U>
  : T extends object
  ? DeepReadonlyObject13332<T>
  : T;

interface DeepReadonlyArray13332<T> extends ReadonlyArray<DeepReadonly13332<T>> {}

type DeepReadonlyObject13332<T> = {
  readonly [P in keyof T]: DeepReadonly13332<T[P]>;
};

type UnionToIntersection13332<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13332<T> = UnionToIntersection13332<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13332<T extends unknown[], V> = [...T, V];

type TuplifyUnion13332<T, L = LastOf13332<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13332<TuplifyUnion13332<Exclude<T, L>>, L>;

type DeepPartial13332<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13332<T[P]> }
  : T;

type Paths13332<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13332<K, Paths13332<T[K], Prev13332[D]>> : never }[keyof T]
  : never;

type Prev13332 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13332<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13332 {
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

type ConfigPaths13332 = Paths13332<NestedConfig13332>;

interface HeavyProps13332 {
  config: DeepPartial13332<NestedConfig13332>;
  path?: ConfigPaths13332;
}

const HeavyComponent13332 = memo(function HeavyComponent13332({ config }: HeavyProps13332) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13332) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13332 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13332: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13332.displayName = 'HeavyComponent13332';
export default HeavyComponent13332;
