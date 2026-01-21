'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13244<T> = T extends (infer U)[]
  ? DeepReadonlyArray13244<U>
  : T extends object
  ? DeepReadonlyObject13244<T>
  : T;

interface DeepReadonlyArray13244<T> extends ReadonlyArray<DeepReadonly13244<T>> {}

type DeepReadonlyObject13244<T> = {
  readonly [P in keyof T]: DeepReadonly13244<T[P]>;
};

type UnionToIntersection13244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13244<T> = UnionToIntersection13244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13244<T extends unknown[], V> = [...T, V];

type TuplifyUnion13244<T, L = LastOf13244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13244<TuplifyUnion13244<Exclude<T, L>>, L>;

type DeepPartial13244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13244<T[P]> }
  : T;

type Paths13244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13244<K, Paths13244<T[K], Prev13244[D]>> : never }[keyof T]
  : never;

type Prev13244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13244 {
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

type ConfigPaths13244 = Paths13244<NestedConfig13244>;

interface HeavyProps13244 {
  config: DeepPartial13244<NestedConfig13244>;
  path?: ConfigPaths13244;
}

const HeavyComponent13244 = memo(function HeavyComponent13244({ config }: HeavyProps13244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13244.displayName = 'HeavyComponent13244';
export default HeavyComponent13244;
