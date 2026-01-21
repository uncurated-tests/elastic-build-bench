'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12784<T> = T extends (infer U)[]
  ? DeepReadonlyArray12784<U>
  : T extends object
  ? DeepReadonlyObject12784<T>
  : T;

interface DeepReadonlyArray12784<T> extends ReadonlyArray<DeepReadonly12784<T>> {}

type DeepReadonlyObject12784<T> = {
  readonly [P in keyof T]: DeepReadonly12784<T[P]>;
};

type UnionToIntersection12784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12784<T> = UnionToIntersection12784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12784<T extends unknown[], V> = [...T, V];

type TuplifyUnion12784<T, L = LastOf12784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12784<TuplifyUnion12784<Exclude<T, L>>, L>;

type DeepPartial12784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12784<T[P]> }
  : T;

type Paths12784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12784<K, Paths12784<T[K], Prev12784[D]>> : never }[keyof T]
  : never;

type Prev12784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12784 {
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

type ConfigPaths12784 = Paths12784<NestedConfig12784>;

interface HeavyProps12784 {
  config: DeepPartial12784<NestedConfig12784>;
  path?: ConfigPaths12784;
}

const HeavyComponent12784 = memo(function HeavyComponent12784({ config }: HeavyProps12784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12784.displayName = 'HeavyComponent12784';
export default HeavyComponent12784;
