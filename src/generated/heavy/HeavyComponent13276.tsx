'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13276<T> = T extends (infer U)[]
  ? DeepReadonlyArray13276<U>
  : T extends object
  ? DeepReadonlyObject13276<T>
  : T;

interface DeepReadonlyArray13276<T> extends ReadonlyArray<DeepReadonly13276<T>> {}

type DeepReadonlyObject13276<T> = {
  readonly [P in keyof T]: DeepReadonly13276<T[P]>;
};

type UnionToIntersection13276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13276<T> = UnionToIntersection13276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13276<T extends unknown[], V> = [...T, V];

type TuplifyUnion13276<T, L = LastOf13276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13276<TuplifyUnion13276<Exclude<T, L>>, L>;

type DeepPartial13276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13276<T[P]> }
  : T;

type Paths13276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13276<K, Paths13276<T[K], Prev13276[D]>> : never }[keyof T]
  : never;

type Prev13276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13276 {
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

type ConfigPaths13276 = Paths13276<NestedConfig13276>;

interface HeavyProps13276 {
  config: DeepPartial13276<NestedConfig13276>;
  path?: ConfigPaths13276;
}

const HeavyComponent13276 = memo(function HeavyComponent13276({ config }: HeavyProps13276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13276.displayName = 'HeavyComponent13276';
export default HeavyComponent13276;
