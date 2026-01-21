'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13637<T> = T extends (infer U)[]
  ? DeepReadonlyArray13637<U>
  : T extends object
  ? DeepReadonlyObject13637<T>
  : T;

interface DeepReadonlyArray13637<T> extends ReadonlyArray<DeepReadonly13637<T>> {}

type DeepReadonlyObject13637<T> = {
  readonly [P in keyof T]: DeepReadonly13637<T[P]>;
};

type UnionToIntersection13637<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13637<T> = UnionToIntersection13637<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13637<T extends unknown[], V> = [...T, V];

type TuplifyUnion13637<T, L = LastOf13637<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13637<TuplifyUnion13637<Exclude<T, L>>, L>;

type DeepPartial13637<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13637<T[P]> }
  : T;

type Paths13637<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13637<K, Paths13637<T[K], Prev13637[D]>> : never }[keyof T]
  : never;

type Prev13637 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13637<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13637 {
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

type ConfigPaths13637 = Paths13637<NestedConfig13637>;

interface HeavyProps13637 {
  config: DeepPartial13637<NestedConfig13637>;
  path?: ConfigPaths13637;
}

const HeavyComponent13637 = memo(function HeavyComponent13637({ config }: HeavyProps13637) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13637) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13637 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13637: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13637.displayName = 'HeavyComponent13637';
export default HeavyComponent13637;
