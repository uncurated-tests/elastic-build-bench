'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13986<T> = T extends (infer U)[]
  ? DeepReadonlyArray13986<U>
  : T extends object
  ? DeepReadonlyObject13986<T>
  : T;

interface DeepReadonlyArray13986<T> extends ReadonlyArray<DeepReadonly13986<T>> {}

type DeepReadonlyObject13986<T> = {
  readonly [P in keyof T]: DeepReadonly13986<T[P]>;
};

type UnionToIntersection13986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13986<T> = UnionToIntersection13986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13986<T extends unknown[], V> = [...T, V];

type TuplifyUnion13986<T, L = LastOf13986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13986<TuplifyUnion13986<Exclude<T, L>>, L>;

type DeepPartial13986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13986<T[P]> }
  : T;

type Paths13986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13986<K, Paths13986<T[K], Prev13986[D]>> : never }[keyof T]
  : never;

type Prev13986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13986 {
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

type ConfigPaths13986 = Paths13986<NestedConfig13986>;

interface HeavyProps13986 {
  config: DeepPartial13986<NestedConfig13986>;
  path?: ConfigPaths13986;
}

const HeavyComponent13986 = memo(function HeavyComponent13986({ config }: HeavyProps13986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13986.displayName = 'HeavyComponent13986';
export default HeavyComponent13986;
