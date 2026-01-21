'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13464<T> = T extends (infer U)[]
  ? DeepReadonlyArray13464<U>
  : T extends object
  ? DeepReadonlyObject13464<T>
  : T;

interface DeepReadonlyArray13464<T> extends ReadonlyArray<DeepReadonly13464<T>> {}

type DeepReadonlyObject13464<T> = {
  readonly [P in keyof T]: DeepReadonly13464<T[P]>;
};

type UnionToIntersection13464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13464<T> = UnionToIntersection13464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13464<T extends unknown[], V> = [...T, V];

type TuplifyUnion13464<T, L = LastOf13464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13464<TuplifyUnion13464<Exclude<T, L>>, L>;

type DeepPartial13464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13464<T[P]> }
  : T;

type Paths13464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13464<K, Paths13464<T[K], Prev13464[D]>> : never }[keyof T]
  : never;

type Prev13464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13464 {
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

type ConfigPaths13464 = Paths13464<NestedConfig13464>;

interface HeavyProps13464 {
  config: DeepPartial13464<NestedConfig13464>;
  path?: ConfigPaths13464;
}

const HeavyComponent13464 = memo(function HeavyComponent13464({ config }: HeavyProps13464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13464.displayName = 'HeavyComponent13464';
export default HeavyComponent13464;
