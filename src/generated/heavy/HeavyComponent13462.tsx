'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13462<T> = T extends (infer U)[]
  ? DeepReadonlyArray13462<U>
  : T extends object
  ? DeepReadonlyObject13462<T>
  : T;

interface DeepReadonlyArray13462<T> extends ReadonlyArray<DeepReadonly13462<T>> {}

type DeepReadonlyObject13462<T> = {
  readonly [P in keyof T]: DeepReadonly13462<T[P]>;
};

type UnionToIntersection13462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13462<T> = UnionToIntersection13462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13462<T extends unknown[], V> = [...T, V];

type TuplifyUnion13462<T, L = LastOf13462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13462<TuplifyUnion13462<Exclude<T, L>>, L>;

type DeepPartial13462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13462<T[P]> }
  : T;

type Paths13462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13462<K, Paths13462<T[K], Prev13462[D]>> : never }[keyof T]
  : never;

type Prev13462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13462 {
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

type ConfigPaths13462 = Paths13462<NestedConfig13462>;

interface HeavyProps13462 {
  config: DeepPartial13462<NestedConfig13462>;
  path?: ConfigPaths13462;
}

const HeavyComponent13462 = memo(function HeavyComponent13462({ config }: HeavyProps13462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13462.displayName = 'HeavyComponent13462';
export default HeavyComponent13462;
