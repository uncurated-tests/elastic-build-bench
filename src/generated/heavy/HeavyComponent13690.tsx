'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13690<T> = T extends (infer U)[]
  ? DeepReadonlyArray13690<U>
  : T extends object
  ? DeepReadonlyObject13690<T>
  : T;

interface DeepReadonlyArray13690<T> extends ReadonlyArray<DeepReadonly13690<T>> {}

type DeepReadonlyObject13690<T> = {
  readonly [P in keyof T]: DeepReadonly13690<T[P]>;
};

type UnionToIntersection13690<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13690<T> = UnionToIntersection13690<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13690<T extends unknown[], V> = [...T, V];

type TuplifyUnion13690<T, L = LastOf13690<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13690<TuplifyUnion13690<Exclude<T, L>>, L>;

type DeepPartial13690<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13690<T[P]> }
  : T;

type Paths13690<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13690<K, Paths13690<T[K], Prev13690[D]>> : never }[keyof T]
  : never;

type Prev13690 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13690<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13690 {
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

type ConfigPaths13690 = Paths13690<NestedConfig13690>;

interface HeavyProps13690 {
  config: DeepPartial13690<NestedConfig13690>;
  path?: ConfigPaths13690;
}

const HeavyComponent13690 = memo(function HeavyComponent13690({ config }: HeavyProps13690) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13690) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13690 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13690: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13690.displayName = 'HeavyComponent13690';
export default HeavyComponent13690;
