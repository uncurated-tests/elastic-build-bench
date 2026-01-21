'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13301<T> = T extends (infer U)[]
  ? DeepReadonlyArray13301<U>
  : T extends object
  ? DeepReadonlyObject13301<T>
  : T;

interface DeepReadonlyArray13301<T> extends ReadonlyArray<DeepReadonly13301<T>> {}

type DeepReadonlyObject13301<T> = {
  readonly [P in keyof T]: DeepReadonly13301<T[P]>;
};

type UnionToIntersection13301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13301<T> = UnionToIntersection13301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13301<T extends unknown[], V> = [...T, V];

type TuplifyUnion13301<T, L = LastOf13301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13301<TuplifyUnion13301<Exclude<T, L>>, L>;

type DeepPartial13301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13301<T[P]> }
  : T;

type Paths13301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13301<K, Paths13301<T[K], Prev13301[D]>> : never }[keyof T]
  : never;

type Prev13301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13301 {
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

type ConfigPaths13301 = Paths13301<NestedConfig13301>;

interface HeavyProps13301 {
  config: DeepPartial13301<NestedConfig13301>;
  path?: ConfigPaths13301;
}

const HeavyComponent13301 = memo(function HeavyComponent13301({ config }: HeavyProps13301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13301.displayName = 'HeavyComponent13301';
export default HeavyComponent13301;
