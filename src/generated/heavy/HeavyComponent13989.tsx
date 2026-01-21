'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13989<T> = T extends (infer U)[]
  ? DeepReadonlyArray13989<U>
  : T extends object
  ? DeepReadonlyObject13989<T>
  : T;

interface DeepReadonlyArray13989<T> extends ReadonlyArray<DeepReadonly13989<T>> {}

type DeepReadonlyObject13989<T> = {
  readonly [P in keyof T]: DeepReadonly13989<T[P]>;
};

type UnionToIntersection13989<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13989<T> = UnionToIntersection13989<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13989<T extends unknown[], V> = [...T, V];

type TuplifyUnion13989<T, L = LastOf13989<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13989<TuplifyUnion13989<Exclude<T, L>>, L>;

type DeepPartial13989<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13989<T[P]> }
  : T;

type Paths13989<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13989<K, Paths13989<T[K], Prev13989[D]>> : never }[keyof T]
  : never;

type Prev13989 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13989<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13989 {
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

type ConfigPaths13989 = Paths13989<NestedConfig13989>;

interface HeavyProps13989 {
  config: DeepPartial13989<NestedConfig13989>;
  path?: ConfigPaths13989;
}

const HeavyComponent13989 = memo(function HeavyComponent13989({ config }: HeavyProps13989) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13989) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13989 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13989: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13989.displayName = 'HeavyComponent13989';
export default HeavyComponent13989;
