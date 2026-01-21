'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly160<T> = T extends (infer U)[]
  ? DeepReadonlyArray160<U>
  : T extends object
  ? DeepReadonlyObject160<T>
  : T;

interface DeepReadonlyArray160<T> extends ReadonlyArray<DeepReadonly160<T>> {}

type DeepReadonlyObject160<T> = {
  readonly [P in keyof T]: DeepReadonly160<T[P]>;
};

type UnionToIntersection160<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf160<T> = UnionToIntersection160<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push160<T extends unknown[], V> = [...T, V];

type TuplifyUnion160<T, L = LastOf160<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push160<TuplifyUnion160<Exclude<T, L>>, L>;

type DeepPartial160<T> = T extends object
  ? { [P in keyof T]?: DeepPartial160<T[P]> }
  : T;

type Paths160<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join160<K, Paths160<T[K], Prev160[D]>> : never }[keyof T]
  : never;

type Prev160 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join160<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig160 {
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

type ConfigPaths160 = Paths160<NestedConfig160>;

interface HeavyProps160 {
  config: DeepPartial160<NestedConfig160>;
  path?: ConfigPaths160;
}

const HeavyComponent160 = memo(function HeavyComponent160({ config }: HeavyProps160) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 160) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-160 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H160: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent160.displayName = 'HeavyComponent160';
export default HeavyComponent160;
