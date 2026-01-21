'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13767<T> = T extends (infer U)[]
  ? DeepReadonlyArray13767<U>
  : T extends object
  ? DeepReadonlyObject13767<T>
  : T;

interface DeepReadonlyArray13767<T> extends ReadonlyArray<DeepReadonly13767<T>> {}

type DeepReadonlyObject13767<T> = {
  readonly [P in keyof T]: DeepReadonly13767<T[P]>;
};

type UnionToIntersection13767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13767<T> = UnionToIntersection13767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13767<T extends unknown[], V> = [...T, V];

type TuplifyUnion13767<T, L = LastOf13767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13767<TuplifyUnion13767<Exclude<T, L>>, L>;

type DeepPartial13767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13767<T[P]> }
  : T;

type Paths13767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13767<K, Paths13767<T[K], Prev13767[D]>> : never }[keyof T]
  : never;

type Prev13767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13767 {
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

type ConfigPaths13767 = Paths13767<NestedConfig13767>;

interface HeavyProps13767 {
  config: DeepPartial13767<NestedConfig13767>;
  path?: ConfigPaths13767;
}

const HeavyComponent13767 = memo(function HeavyComponent13767({ config }: HeavyProps13767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13767.displayName = 'HeavyComponent13767';
export default HeavyComponent13767;
