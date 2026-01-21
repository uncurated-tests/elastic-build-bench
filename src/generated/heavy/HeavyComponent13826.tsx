'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13826<T> = T extends (infer U)[]
  ? DeepReadonlyArray13826<U>
  : T extends object
  ? DeepReadonlyObject13826<T>
  : T;

interface DeepReadonlyArray13826<T> extends ReadonlyArray<DeepReadonly13826<T>> {}

type DeepReadonlyObject13826<T> = {
  readonly [P in keyof T]: DeepReadonly13826<T[P]>;
};

type UnionToIntersection13826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13826<T> = UnionToIntersection13826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13826<T extends unknown[], V> = [...T, V];

type TuplifyUnion13826<T, L = LastOf13826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13826<TuplifyUnion13826<Exclude<T, L>>, L>;

type DeepPartial13826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13826<T[P]> }
  : T;

type Paths13826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13826<K, Paths13826<T[K], Prev13826[D]>> : never }[keyof T]
  : never;

type Prev13826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13826 {
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

type ConfigPaths13826 = Paths13826<NestedConfig13826>;

interface HeavyProps13826 {
  config: DeepPartial13826<NestedConfig13826>;
  path?: ConfigPaths13826;
}

const HeavyComponent13826 = memo(function HeavyComponent13826({ config }: HeavyProps13826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13826.displayName = 'HeavyComponent13826';
export default HeavyComponent13826;
