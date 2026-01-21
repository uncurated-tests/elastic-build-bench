'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13311<T> = T extends (infer U)[]
  ? DeepReadonlyArray13311<U>
  : T extends object
  ? DeepReadonlyObject13311<T>
  : T;

interface DeepReadonlyArray13311<T> extends ReadonlyArray<DeepReadonly13311<T>> {}

type DeepReadonlyObject13311<T> = {
  readonly [P in keyof T]: DeepReadonly13311<T[P]>;
};

type UnionToIntersection13311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13311<T> = UnionToIntersection13311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13311<T extends unknown[], V> = [...T, V];

type TuplifyUnion13311<T, L = LastOf13311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13311<TuplifyUnion13311<Exclude<T, L>>, L>;

type DeepPartial13311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13311<T[P]> }
  : T;

type Paths13311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13311<K, Paths13311<T[K], Prev13311[D]>> : never }[keyof T]
  : never;

type Prev13311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13311 {
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

type ConfigPaths13311 = Paths13311<NestedConfig13311>;

interface HeavyProps13311 {
  config: DeepPartial13311<NestedConfig13311>;
  path?: ConfigPaths13311;
}

const HeavyComponent13311 = memo(function HeavyComponent13311({ config }: HeavyProps13311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13311.displayName = 'HeavyComponent13311';
export default HeavyComponent13311;
