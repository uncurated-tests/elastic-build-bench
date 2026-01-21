'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13777<T> = T extends (infer U)[]
  ? DeepReadonlyArray13777<U>
  : T extends object
  ? DeepReadonlyObject13777<T>
  : T;

interface DeepReadonlyArray13777<T> extends ReadonlyArray<DeepReadonly13777<T>> {}

type DeepReadonlyObject13777<T> = {
  readonly [P in keyof T]: DeepReadonly13777<T[P]>;
};

type UnionToIntersection13777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13777<T> = UnionToIntersection13777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13777<T extends unknown[], V> = [...T, V];

type TuplifyUnion13777<T, L = LastOf13777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13777<TuplifyUnion13777<Exclude<T, L>>, L>;

type DeepPartial13777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13777<T[P]> }
  : T;

type Paths13777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13777<K, Paths13777<T[K], Prev13777[D]>> : never }[keyof T]
  : never;

type Prev13777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13777 {
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

type ConfigPaths13777 = Paths13777<NestedConfig13777>;

interface HeavyProps13777 {
  config: DeepPartial13777<NestedConfig13777>;
  path?: ConfigPaths13777;
}

const HeavyComponent13777 = memo(function HeavyComponent13777({ config }: HeavyProps13777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13777.displayName = 'HeavyComponent13777';
export default HeavyComponent13777;
