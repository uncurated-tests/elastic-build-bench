'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13567<T> = T extends (infer U)[]
  ? DeepReadonlyArray13567<U>
  : T extends object
  ? DeepReadonlyObject13567<T>
  : T;

interface DeepReadonlyArray13567<T> extends ReadonlyArray<DeepReadonly13567<T>> {}

type DeepReadonlyObject13567<T> = {
  readonly [P in keyof T]: DeepReadonly13567<T[P]>;
};

type UnionToIntersection13567<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13567<T> = UnionToIntersection13567<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13567<T extends unknown[], V> = [...T, V];

type TuplifyUnion13567<T, L = LastOf13567<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13567<TuplifyUnion13567<Exclude<T, L>>, L>;

type DeepPartial13567<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13567<T[P]> }
  : T;

type Paths13567<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13567<K, Paths13567<T[K], Prev13567[D]>> : never }[keyof T]
  : never;

type Prev13567 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13567<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13567 {
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

type ConfigPaths13567 = Paths13567<NestedConfig13567>;

interface HeavyProps13567 {
  config: DeepPartial13567<NestedConfig13567>;
  path?: ConfigPaths13567;
}

const HeavyComponent13567 = memo(function HeavyComponent13567({ config }: HeavyProps13567) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13567) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13567 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13567: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13567.displayName = 'HeavyComponent13567';
export default HeavyComponent13567;
