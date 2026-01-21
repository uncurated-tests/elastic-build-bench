'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13145<T> = T extends (infer U)[]
  ? DeepReadonlyArray13145<U>
  : T extends object
  ? DeepReadonlyObject13145<T>
  : T;

interface DeepReadonlyArray13145<T> extends ReadonlyArray<DeepReadonly13145<T>> {}

type DeepReadonlyObject13145<T> = {
  readonly [P in keyof T]: DeepReadonly13145<T[P]>;
};

type UnionToIntersection13145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13145<T> = UnionToIntersection13145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13145<T extends unknown[], V> = [...T, V];

type TuplifyUnion13145<T, L = LastOf13145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13145<TuplifyUnion13145<Exclude<T, L>>, L>;

type DeepPartial13145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13145<T[P]> }
  : T;

type Paths13145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13145<K, Paths13145<T[K], Prev13145[D]>> : never }[keyof T]
  : never;

type Prev13145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13145 {
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

type ConfigPaths13145 = Paths13145<NestedConfig13145>;

interface HeavyProps13145 {
  config: DeepPartial13145<NestedConfig13145>;
  path?: ConfigPaths13145;
}

const HeavyComponent13145 = memo(function HeavyComponent13145({ config }: HeavyProps13145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13145.displayName = 'HeavyComponent13145';
export default HeavyComponent13145;
