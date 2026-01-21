'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13643<T> = T extends (infer U)[]
  ? DeepReadonlyArray13643<U>
  : T extends object
  ? DeepReadonlyObject13643<T>
  : T;

interface DeepReadonlyArray13643<T> extends ReadonlyArray<DeepReadonly13643<T>> {}

type DeepReadonlyObject13643<T> = {
  readonly [P in keyof T]: DeepReadonly13643<T[P]>;
};

type UnionToIntersection13643<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13643<T> = UnionToIntersection13643<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13643<T extends unknown[], V> = [...T, V];

type TuplifyUnion13643<T, L = LastOf13643<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13643<TuplifyUnion13643<Exclude<T, L>>, L>;

type DeepPartial13643<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13643<T[P]> }
  : T;

type Paths13643<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13643<K, Paths13643<T[K], Prev13643[D]>> : never }[keyof T]
  : never;

type Prev13643 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13643<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13643 {
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

type ConfigPaths13643 = Paths13643<NestedConfig13643>;

interface HeavyProps13643 {
  config: DeepPartial13643<NestedConfig13643>;
  path?: ConfigPaths13643;
}

const HeavyComponent13643 = memo(function HeavyComponent13643({ config }: HeavyProps13643) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13643) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13643 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13643: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13643.displayName = 'HeavyComponent13643';
export default HeavyComponent13643;
