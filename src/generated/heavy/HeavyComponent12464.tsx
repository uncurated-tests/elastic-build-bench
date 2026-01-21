'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12464<T> = T extends (infer U)[]
  ? DeepReadonlyArray12464<U>
  : T extends object
  ? DeepReadonlyObject12464<T>
  : T;

interface DeepReadonlyArray12464<T> extends ReadonlyArray<DeepReadonly12464<T>> {}

type DeepReadonlyObject12464<T> = {
  readonly [P in keyof T]: DeepReadonly12464<T[P]>;
};

type UnionToIntersection12464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12464<T> = UnionToIntersection12464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12464<T extends unknown[], V> = [...T, V];

type TuplifyUnion12464<T, L = LastOf12464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12464<TuplifyUnion12464<Exclude<T, L>>, L>;

type DeepPartial12464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12464<T[P]> }
  : T;

type Paths12464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12464<K, Paths12464<T[K], Prev12464[D]>> : never }[keyof T]
  : never;

type Prev12464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12464 {
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

type ConfigPaths12464 = Paths12464<NestedConfig12464>;

interface HeavyProps12464 {
  config: DeepPartial12464<NestedConfig12464>;
  path?: ConfigPaths12464;
}

const HeavyComponent12464 = memo(function HeavyComponent12464({ config }: HeavyProps12464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12464.displayName = 'HeavyComponent12464';
export default HeavyComponent12464;
