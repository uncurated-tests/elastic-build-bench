'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13947<T> = T extends (infer U)[]
  ? DeepReadonlyArray13947<U>
  : T extends object
  ? DeepReadonlyObject13947<T>
  : T;

interface DeepReadonlyArray13947<T> extends ReadonlyArray<DeepReadonly13947<T>> {}

type DeepReadonlyObject13947<T> = {
  readonly [P in keyof T]: DeepReadonly13947<T[P]>;
};

type UnionToIntersection13947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13947<T> = UnionToIntersection13947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13947<T extends unknown[], V> = [...T, V];

type TuplifyUnion13947<T, L = LastOf13947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13947<TuplifyUnion13947<Exclude<T, L>>, L>;

type DeepPartial13947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13947<T[P]> }
  : T;

type Paths13947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13947<K, Paths13947<T[K], Prev13947[D]>> : never }[keyof T]
  : never;

type Prev13947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13947 {
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

type ConfigPaths13947 = Paths13947<NestedConfig13947>;

interface HeavyProps13947 {
  config: DeepPartial13947<NestedConfig13947>;
  path?: ConfigPaths13947;
}

const HeavyComponent13947 = memo(function HeavyComponent13947({ config }: HeavyProps13947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13947.displayName = 'HeavyComponent13947';
export default HeavyComponent13947;
