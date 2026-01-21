'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13294<T> = T extends (infer U)[]
  ? DeepReadonlyArray13294<U>
  : T extends object
  ? DeepReadonlyObject13294<T>
  : T;

interface DeepReadonlyArray13294<T> extends ReadonlyArray<DeepReadonly13294<T>> {}

type DeepReadonlyObject13294<T> = {
  readonly [P in keyof T]: DeepReadonly13294<T[P]>;
};

type UnionToIntersection13294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13294<T> = UnionToIntersection13294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13294<T extends unknown[], V> = [...T, V];

type TuplifyUnion13294<T, L = LastOf13294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13294<TuplifyUnion13294<Exclude<T, L>>, L>;

type DeepPartial13294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13294<T[P]> }
  : T;

type Paths13294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13294<K, Paths13294<T[K], Prev13294[D]>> : never }[keyof T]
  : never;

type Prev13294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13294 {
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

type ConfigPaths13294 = Paths13294<NestedConfig13294>;

interface HeavyProps13294 {
  config: DeepPartial13294<NestedConfig13294>;
  path?: ConfigPaths13294;
}

const HeavyComponent13294 = memo(function HeavyComponent13294({ config }: HeavyProps13294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13294.displayName = 'HeavyComponent13294';
export default HeavyComponent13294;
