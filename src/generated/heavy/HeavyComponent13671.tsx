'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13671<T> = T extends (infer U)[]
  ? DeepReadonlyArray13671<U>
  : T extends object
  ? DeepReadonlyObject13671<T>
  : T;

interface DeepReadonlyArray13671<T> extends ReadonlyArray<DeepReadonly13671<T>> {}

type DeepReadonlyObject13671<T> = {
  readonly [P in keyof T]: DeepReadonly13671<T[P]>;
};

type UnionToIntersection13671<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13671<T> = UnionToIntersection13671<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13671<T extends unknown[], V> = [...T, V];

type TuplifyUnion13671<T, L = LastOf13671<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13671<TuplifyUnion13671<Exclude<T, L>>, L>;

type DeepPartial13671<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13671<T[P]> }
  : T;

type Paths13671<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13671<K, Paths13671<T[K], Prev13671[D]>> : never }[keyof T]
  : never;

type Prev13671 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13671<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13671 {
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

type ConfigPaths13671 = Paths13671<NestedConfig13671>;

interface HeavyProps13671 {
  config: DeepPartial13671<NestedConfig13671>;
  path?: ConfigPaths13671;
}

const HeavyComponent13671 = memo(function HeavyComponent13671({ config }: HeavyProps13671) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13671) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13671 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13671: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13671.displayName = 'HeavyComponent13671';
export default HeavyComponent13671;
