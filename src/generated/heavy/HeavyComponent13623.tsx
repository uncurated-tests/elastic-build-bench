'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13623<T> = T extends (infer U)[]
  ? DeepReadonlyArray13623<U>
  : T extends object
  ? DeepReadonlyObject13623<T>
  : T;

interface DeepReadonlyArray13623<T> extends ReadonlyArray<DeepReadonly13623<T>> {}

type DeepReadonlyObject13623<T> = {
  readonly [P in keyof T]: DeepReadonly13623<T[P]>;
};

type UnionToIntersection13623<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13623<T> = UnionToIntersection13623<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13623<T extends unknown[], V> = [...T, V];

type TuplifyUnion13623<T, L = LastOf13623<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13623<TuplifyUnion13623<Exclude<T, L>>, L>;

type DeepPartial13623<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13623<T[P]> }
  : T;

type Paths13623<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13623<K, Paths13623<T[K], Prev13623[D]>> : never }[keyof T]
  : never;

type Prev13623 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13623<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13623 {
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

type ConfigPaths13623 = Paths13623<NestedConfig13623>;

interface HeavyProps13623 {
  config: DeepPartial13623<NestedConfig13623>;
  path?: ConfigPaths13623;
}

const HeavyComponent13623 = memo(function HeavyComponent13623({ config }: HeavyProps13623) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13623) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13623 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13623: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13623.displayName = 'HeavyComponent13623';
export default HeavyComponent13623;
