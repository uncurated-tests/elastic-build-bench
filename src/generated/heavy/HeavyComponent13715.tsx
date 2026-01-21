'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13715<T> = T extends (infer U)[]
  ? DeepReadonlyArray13715<U>
  : T extends object
  ? DeepReadonlyObject13715<T>
  : T;

interface DeepReadonlyArray13715<T> extends ReadonlyArray<DeepReadonly13715<T>> {}

type DeepReadonlyObject13715<T> = {
  readonly [P in keyof T]: DeepReadonly13715<T[P]>;
};

type UnionToIntersection13715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13715<T> = UnionToIntersection13715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13715<T extends unknown[], V> = [...T, V];

type TuplifyUnion13715<T, L = LastOf13715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13715<TuplifyUnion13715<Exclude<T, L>>, L>;

type DeepPartial13715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13715<T[P]> }
  : T;

type Paths13715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13715<K, Paths13715<T[K], Prev13715[D]>> : never }[keyof T]
  : never;

type Prev13715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13715 {
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

type ConfigPaths13715 = Paths13715<NestedConfig13715>;

interface HeavyProps13715 {
  config: DeepPartial13715<NestedConfig13715>;
  path?: ConfigPaths13715;
}

const HeavyComponent13715 = memo(function HeavyComponent13715({ config }: HeavyProps13715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13715.displayName = 'HeavyComponent13715';
export default HeavyComponent13715;
