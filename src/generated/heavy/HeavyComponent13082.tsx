'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13082<T> = T extends (infer U)[]
  ? DeepReadonlyArray13082<U>
  : T extends object
  ? DeepReadonlyObject13082<T>
  : T;

interface DeepReadonlyArray13082<T> extends ReadonlyArray<DeepReadonly13082<T>> {}

type DeepReadonlyObject13082<T> = {
  readonly [P in keyof T]: DeepReadonly13082<T[P]>;
};

type UnionToIntersection13082<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13082<T> = UnionToIntersection13082<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13082<T extends unknown[], V> = [...T, V];

type TuplifyUnion13082<T, L = LastOf13082<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13082<TuplifyUnion13082<Exclude<T, L>>, L>;

type DeepPartial13082<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13082<T[P]> }
  : T;

type Paths13082<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13082<K, Paths13082<T[K], Prev13082[D]>> : never }[keyof T]
  : never;

type Prev13082 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13082<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13082 {
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

type ConfigPaths13082 = Paths13082<NestedConfig13082>;

interface HeavyProps13082 {
  config: DeepPartial13082<NestedConfig13082>;
  path?: ConfigPaths13082;
}

const HeavyComponent13082 = memo(function HeavyComponent13082({ config }: HeavyProps13082) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13082) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13082 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13082: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13082.displayName = 'HeavyComponent13082';
export default HeavyComponent13082;
