'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13840<T> = T extends (infer U)[]
  ? DeepReadonlyArray13840<U>
  : T extends object
  ? DeepReadonlyObject13840<T>
  : T;

interface DeepReadonlyArray13840<T> extends ReadonlyArray<DeepReadonly13840<T>> {}

type DeepReadonlyObject13840<T> = {
  readonly [P in keyof T]: DeepReadonly13840<T[P]>;
};

type UnionToIntersection13840<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13840<T> = UnionToIntersection13840<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13840<T extends unknown[], V> = [...T, V];

type TuplifyUnion13840<T, L = LastOf13840<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13840<TuplifyUnion13840<Exclude<T, L>>, L>;

type DeepPartial13840<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13840<T[P]> }
  : T;

type Paths13840<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13840<K, Paths13840<T[K], Prev13840[D]>> : never }[keyof T]
  : never;

type Prev13840 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13840<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13840 {
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

type ConfigPaths13840 = Paths13840<NestedConfig13840>;

interface HeavyProps13840 {
  config: DeepPartial13840<NestedConfig13840>;
  path?: ConfigPaths13840;
}

const HeavyComponent13840 = memo(function HeavyComponent13840({ config }: HeavyProps13840) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13840) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13840 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13840: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13840.displayName = 'HeavyComponent13840';
export default HeavyComponent13840;
