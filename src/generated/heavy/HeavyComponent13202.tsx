'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13202<T> = T extends (infer U)[]
  ? DeepReadonlyArray13202<U>
  : T extends object
  ? DeepReadonlyObject13202<T>
  : T;

interface DeepReadonlyArray13202<T> extends ReadonlyArray<DeepReadonly13202<T>> {}

type DeepReadonlyObject13202<T> = {
  readonly [P in keyof T]: DeepReadonly13202<T[P]>;
};

type UnionToIntersection13202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13202<T> = UnionToIntersection13202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13202<T extends unknown[], V> = [...T, V];

type TuplifyUnion13202<T, L = LastOf13202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13202<TuplifyUnion13202<Exclude<T, L>>, L>;

type DeepPartial13202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13202<T[P]> }
  : T;

type Paths13202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13202<K, Paths13202<T[K], Prev13202[D]>> : never }[keyof T]
  : never;

type Prev13202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13202 {
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

type ConfigPaths13202 = Paths13202<NestedConfig13202>;

interface HeavyProps13202 {
  config: DeepPartial13202<NestedConfig13202>;
  path?: ConfigPaths13202;
}

const HeavyComponent13202 = memo(function HeavyComponent13202({ config }: HeavyProps13202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13202.displayName = 'HeavyComponent13202';
export default HeavyComponent13202;
