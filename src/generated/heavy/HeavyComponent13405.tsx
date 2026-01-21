'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13405<T> = T extends (infer U)[]
  ? DeepReadonlyArray13405<U>
  : T extends object
  ? DeepReadonlyObject13405<T>
  : T;

interface DeepReadonlyArray13405<T> extends ReadonlyArray<DeepReadonly13405<T>> {}

type DeepReadonlyObject13405<T> = {
  readonly [P in keyof T]: DeepReadonly13405<T[P]>;
};

type UnionToIntersection13405<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13405<T> = UnionToIntersection13405<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13405<T extends unknown[], V> = [...T, V];

type TuplifyUnion13405<T, L = LastOf13405<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13405<TuplifyUnion13405<Exclude<T, L>>, L>;

type DeepPartial13405<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13405<T[P]> }
  : T;

type Paths13405<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13405<K, Paths13405<T[K], Prev13405[D]>> : never }[keyof T]
  : never;

type Prev13405 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13405<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13405 {
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

type ConfigPaths13405 = Paths13405<NestedConfig13405>;

interface HeavyProps13405 {
  config: DeepPartial13405<NestedConfig13405>;
  path?: ConfigPaths13405;
}

const HeavyComponent13405 = memo(function HeavyComponent13405({ config }: HeavyProps13405) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13405) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13405 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13405: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13405.displayName = 'HeavyComponent13405';
export default HeavyComponent13405;
