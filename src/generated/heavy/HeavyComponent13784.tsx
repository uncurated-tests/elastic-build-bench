'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13784<T> = T extends (infer U)[]
  ? DeepReadonlyArray13784<U>
  : T extends object
  ? DeepReadonlyObject13784<T>
  : T;

interface DeepReadonlyArray13784<T> extends ReadonlyArray<DeepReadonly13784<T>> {}

type DeepReadonlyObject13784<T> = {
  readonly [P in keyof T]: DeepReadonly13784<T[P]>;
};

type UnionToIntersection13784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13784<T> = UnionToIntersection13784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13784<T extends unknown[], V> = [...T, V];

type TuplifyUnion13784<T, L = LastOf13784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13784<TuplifyUnion13784<Exclude<T, L>>, L>;

type DeepPartial13784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13784<T[P]> }
  : T;

type Paths13784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13784<K, Paths13784<T[K], Prev13784[D]>> : never }[keyof T]
  : never;

type Prev13784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13784 {
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

type ConfigPaths13784 = Paths13784<NestedConfig13784>;

interface HeavyProps13784 {
  config: DeepPartial13784<NestedConfig13784>;
  path?: ConfigPaths13784;
}

const HeavyComponent13784 = memo(function HeavyComponent13784({ config }: HeavyProps13784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13784.displayName = 'HeavyComponent13784';
export default HeavyComponent13784;
