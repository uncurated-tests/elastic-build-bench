'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12502<T> = T extends (infer U)[]
  ? DeepReadonlyArray12502<U>
  : T extends object
  ? DeepReadonlyObject12502<T>
  : T;

interface DeepReadonlyArray12502<T> extends ReadonlyArray<DeepReadonly12502<T>> {}

type DeepReadonlyObject12502<T> = {
  readonly [P in keyof T]: DeepReadonly12502<T[P]>;
};

type UnionToIntersection12502<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12502<T> = UnionToIntersection12502<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12502<T extends unknown[], V> = [...T, V];

type TuplifyUnion12502<T, L = LastOf12502<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12502<TuplifyUnion12502<Exclude<T, L>>, L>;

type DeepPartial12502<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12502<T[P]> }
  : T;

type Paths12502<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12502<K, Paths12502<T[K], Prev12502[D]>> : never }[keyof T]
  : never;

type Prev12502 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12502<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12502 {
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

type ConfigPaths12502 = Paths12502<NestedConfig12502>;

interface HeavyProps12502 {
  config: DeepPartial12502<NestedConfig12502>;
  path?: ConfigPaths12502;
}

const HeavyComponent12502 = memo(function HeavyComponent12502({ config }: HeavyProps12502) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12502) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12502 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12502: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12502.displayName = 'HeavyComponent12502';
export default HeavyComponent12502;
