'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13035<T> = T extends (infer U)[]
  ? DeepReadonlyArray13035<U>
  : T extends object
  ? DeepReadonlyObject13035<T>
  : T;

interface DeepReadonlyArray13035<T> extends ReadonlyArray<DeepReadonly13035<T>> {}

type DeepReadonlyObject13035<T> = {
  readonly [P in keyof T]: DeepReadonly13035<T[P]>;
};

type UnionToIntersection13035<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13035<T> = UnionToIntersection13035<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13035<T extends unknown[], V> = [...T, V];

type TuplifyUnion13035<T, L = LastOf13035<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13035<TuplifyUnion13035<Exclude<T, L>>, L>;

type DeepPartial13035<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13035<T[P]> }
  : T;

type Paths13035<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13035<K, Paths13035<T[K], Prev13035[D]>> : never }[keyof T]
  : never;

type Prev13035 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13035<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13035 {
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

type ConfigPaths13035 = Paths13035<NestedConfig13035>;

interface HeavyProps13035 {
  config: DeepPartial13035<NestedConfig13035>;
  path?: ConfigPaths13035;
}

const HeavyComponent13035 = memo(function HeavyComponent13035({ config }: HeavyProps13035) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13035) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13035 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13035: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13035.displayName = 'HeavyComponent13035';
export default HeavyComponent13035;
