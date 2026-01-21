'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13402<T> = T extends (infer U)[]
  ? DeepReadonlyArray13402<U>
  : T extends object
  ? DeepReadonlyObject13402<T>
  : T;

interface DeepReadonlyArray13402<T> extends ReadonlyArray<DeepReadonly13402<T>> {}

type DeepReadonlyObject13402<T> = {
  readonly [P in keyof T]: DeepReadonly13402<T[P]>;
};

type UnionToIntersection13402<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13402<T> = UnionToIntersection13402<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13402<T extends unknown[], V> = [...T, V];

type TuplifyUnion13402<T, L = LastOf13402<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13402<TuplifyUnion13402<Exclude<T, L>>, L>;

type DeepPartial13402<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13402<T[P]> }
  : T;

type Paths13402<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13402<K, Paths13402<T[K], Prev13402[D]>> : never }[keyof T]
  : never;

type Prev13402 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13402<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13402 {
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

type ConfigPaths13402 = Paths13402<NestedConfig13402>;

interface HeavyProps13402 {
  config: DeepPartial13402<NestedConfig13402>;
  path?: ConfigPaths13402;
}

const HeavyComponent13402 = memo(function HeavyComponent13402({ config }: HeavyProps13402) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13402) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13402 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13402: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13402.displayName = 'HeavyComponent13402';
export default HeavyComponent13402;
