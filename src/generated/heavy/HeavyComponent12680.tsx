'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12680<T> = T extends (infer U)[]
  ? DeepReadonlyArray12680<U>
  : T extends object
  ? DeepReadonlyObject12680<T>
  : T;

interface DeepReadonlyArray12680<T> extends ReadonlyArray<DeepReadonly12680<T>> {}

type DeepReadonlyObject12680<T> = {
  readonly [P in keyof T]: DeepReadonly12680<T[P]>;
};

type UnionToIntersection12680<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12680<T> = UnionToIntersection12680<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12680<T extends unknown[], V> = [...T, V];

type TuplifyUnion12680<T, L = LastOf12680<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12680<TuplifyUnion12680<Exclude<T, L>>, L>;

type DeepPartial12680<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12680<T[P]> }
  : T;

type Paths12680<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12680<K, Paths12680<T[K], Prev12680[D]>> : never }[keyof T]
  : never;

type Prev12680 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12680<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12680 {
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

type ConfigPaths12680 = Paths12680<NestedConfig12680>;

interface HeavyProps12680 {
  config: DeepPartial12680<NestedConfig12680>;
  path?: ConfigPaths12680;
}

const HeavyComponent12680 = memo(function HeavyComponent12680({ config }: HeavyProps12680) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12680) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12680 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12680: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12680.displayName = 'HeavyComponent12680';
export default HeavyComponent12680;
