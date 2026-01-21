'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13504<T> = T extends (infer U)[]
  ? DeepReadonlyArray13504<U>
  : T extends object
  ? DeepReadonlyObject13504<T>
  : T;

interface DeepReadonlyArray13504<T> extends ReadonlyArray<DeepReadonly13504<T>> {}

type DeepReadonlyObject13504<T> = {
  readonly [P in keyof T]: DeepReadonly13504<T[P]>;
};

type UnionToIntersection13504<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13504<T> = UnionToIntersection13504<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13504<T extends unknown[], V> = [...T, V];

type TuplifyUnion13504<T, L = LastOf13504<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13504<TuplifyUnion13504<Exclude<T, L>>, L>;

type DeepPartial13504<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13504<T[P]> }
  : T;

type Paths13504<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13504<K, Paths13504<T[K], Prev13504[D]>> : never }[keyof T]
  : never;

type Prev13504 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13504<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13504 {
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

type ConfigPaths13504 = Paths13504<NestedConfig13504>;

interface HeavyProps13504 {
  config: DeepPartial13504<NestedConfig13504>;
  path?: ConfigPaths13504;
}

const HeavyComponent13504 = memo(function HeavyComponent13504({ config }: HeavyProps13504) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13504) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13504 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13504: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13504.displayName = 'HeavyComponent13504';
export default HeavyComponent13504;
