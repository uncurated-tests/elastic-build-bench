'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13520<T> = T extends (infer U)[]
  ? DeepReadonlyArray13520<U>
  : T extends object
  ? DeepReadonlyObject13520<T>
  : T;

interface DeepReadonlyArray13520<T> extends ReadonlyArray<DeepReadonly13520<T>> {}

type DeepReadonlyObject13520<T> = {
  readonly [P in keyof T]: DeepReadonly13520<T[P]>;
};

type UnionToIntersection13520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13520<T> = UnionToIntersection13520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13520<T extends unknown[], V> = [...T, V];

type TuplifyUnion13520<T, L = LastOf13520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13520<TuplifyUnion13520<Exclude<T, L>>, L>;

type DeepPartial13520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13520<T[P]> }
  : T;

type Paths13520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13520<K, Paths13520<T[K], Prev13520[D]>> : never }[keyof T]
  : never;

type Prev13520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13520 {
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

type ConfigPaths13520 = Paths13520<NestedConfig13520>;

interface HeavyProps13520 {
  config: DeepPartial13520<NestedConfig13520>;
  path?: ConfigPaths13520;
}

const HeavyComponent13520 = memo(function HeavyComponent13520({ config }: HeavyProps13520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13520.displayName = 'HeavyComponent13520';
export default HeavyComponent13520;
