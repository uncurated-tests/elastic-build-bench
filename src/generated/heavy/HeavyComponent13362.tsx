'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13362<T> = T extends (infer U)[]
  ? DeepReadonlyArray13362<U>
  : T extends object
  ? DeepReadonlyObject13362<T>
  : T;

interface DeepReadonlyArray13362<T> extends ReadonlyArray<DeepReadonly13362<T>> {}

type DeepReadonlyObject13362<T> = {
  readonly [P in keyof T]: DeepReadonly13362<T[P]>;
};

type UnionToIntersection13362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13362<T> = UnionToIntersection13362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13362<T extends unknown[], V> = [...T, V];

type TuplifyUnion13362<T, L = LastOf13362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13362<TuplifyUnion13362<Exclude<T, L>>, L>;

type DeepPartial13362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13362<T[P]> }
  : T;

type Paths13362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13362<K, Paths13362<T[K], Prev13362[D]>> : never }[keyof T]
  : never;

type Prev13362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13362 {
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

type ConfigPaths13362 = Paths13362<NestedConfig13362>;

interface HeavyProps13362 {
  config: DeepPartial13362<NestedConfig13362>;
  path?: ConfigPaths13362;
}

const HeavyComponent13362 = memo(function HeavyComponent13362({ config }: HeavyProps13362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13362.displayName = 'HeavyComponent13362';
export default HeavyComponent13362;
