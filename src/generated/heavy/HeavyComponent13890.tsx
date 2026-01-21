'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13890<T> = T extends (infer U)[]
  ? DeepReadonlyArray13890<U>
  : T extends object
  ? DeepReadonlyObject13890<T>
  : T;

interface DeepReadonlyArray13890<T> extends ReadonlyArray<DeepReadonly13890<T>> {}

type DeepReadonlyObject13890<T> = {
  readonly [P in keyof T]: DeepReadonly13890<T[P]>;
};

type UnionToIntersection13890<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13890<T> = UnionToIntersection13890<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13890<T extends unknown[], V> = [...T, V];

type TuplifyUnion13890<T, L = LastOf13890<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13890<TuplifyUnion13890<Exclude<T, L>>, L>;

type DeepPartial13890<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13890<T[P]> }
  : T;

type Paths13890<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13890<K, Paths13890<T[K], Prev13890[D]>> : never }[keyof T]
  : never;

type Prev13890 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13890<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13890 {
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

type ConfigPaths13890 = Paths13890<NestedConfig13890>;

interface HeavyProps13890 {
  config: DeepPartial13890<NestedConfig13890>;
  path?: ConfigPaths13890;
}

const HeavyComponent13890 = memo(function HeavyComponent13890({ config }: HeavyProps13890) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13890) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13890 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13890: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13890.displayName = 'HeavyComponent13890';
export default HeavyComponent13890;
