'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13933<T> = T extends (infer U)[]
  ? DeepReadonlyArray13933<U>
  : T extends object
  ? DeepReadonlyObject13933<T>
  : T;

interface DeepReadonlyArray13933<T> extends ReadonlyArray<DeepReadonly13933<T>> {}

type DeepReadonlyObject13933<T> = {
  readonly [P in keyof T]: DeepReadonly13933<T[P]>;
};

type UnionToIntersection13933<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13933<T> = UnionToIntersection13933<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13933<T extends unknown[], V> = [...T, V];

type TuplifyUnion13933<T, L = LastOf13933<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13933<TuplifyUnion13933<Exclude<T, L>>, L>;

type DeepPartial13933<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13933<T[P]> }
  : T;

type Paths13933<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13933<K, Paths13933<T[K], Prev13933[D]>> : never }[keyof T]
  : never;

type Prev13933 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13933<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13933 {
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

type ConfigPaths13933 = Paths13933<NestedConfig13933>;

interface HeavyProps13933 {
  config: DeepPartial13933<NestedConfig13933>;
  path?: ConfigPaths13933;
}

const HeavyComponent13933 = memo(function HeavyComponent13933({ config }: HeavyProps13933) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13933) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13933 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13933: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13933.displayName = 'HeavyComponent13933';
export default HeavyComponent13933;
