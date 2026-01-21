'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13821<T> = T extends (infer U)[]
  ? DeepReadonlyArray13821<U>
  : T extends object
  ? DeepReadonlyObject13821<T>
  : T;

interface DeepReadonlyArray13821<T> extends ReadonlyArray<DeepReadonly13821<T>> {}

type DeepReadonlyObject13821<T> = {
  readonly [P in keyof T]: DeepReadonly13821<T[P]>;
};

type UnionToIntersection13821<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13821<T> = UnionToIntersection13821<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13821<T extends unknown[], V> = [...T, V];

type TuplifyUnion13821<T, L = LastOf13821<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13821<TuplifyUnion13821<Exclude<T, L>>, L>;

type DeepPartial13821<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13821<T[P]> }
  : T;

type Paths13821<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13821<K, Paths13821<T[K], Prev13821[D]>> : never }[keyof T]
  : never;

type Prev13821 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13821<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13821 {
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

type ConfigPaths13821 = Paths13821<NestedConfig13821>;

interface HeavyProps13821 {
  config: DeepPartial13821<NestedConfig13821>;
  path?: ConfigPaths13821;
}

const HeavyComponent13821 = memo(function HeavyComponent13821({ config }: HeavyProps13821) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13821) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13821 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13821: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13821.displayName = 'HeavyComponent13821';
export default HeavyComponent13821;
