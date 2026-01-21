'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12163<T> = T extends (infer U)[]
  ? DeepReadonlyArray12163<U>
  : T extends object
  ? DeepReadonlyObject12163<T>
  : T;

interface DeepReadonlyArray12163<T> extends ReadonlyArray<DeepReadonly12163<T>> {}

type DeepReadonlyObject12163<T> = {
  readonly [P in keyof T]: DeepReadonly12163<T[P]>;
};

type UnionToIntersection12163<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12163<T> = UnionToIntersection12163<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12163<T extends unknown[], V> = [...T, V];

type TuplifyUnion12163<T, L = LastOf12163<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12163<TuplifyUnion12163<Exclude<T, L>>, L>;

type DeepPartial12163<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12163<T[P]> }
  : T;

type Paths12163<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12163<K, Paths12163<T[K], Prev12163[D]>> : never }[keyof T]
  : never;

type Prev12163 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12163<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12163 {
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

type ConfigPaths12163 = Paths12163<NestedConfig12163>;

interface HeavyProps12163 {
  config: DeepPartial12163<NestedConfig12163>;
  path?: ConfigPaths12163;
}

const HeavyComponent12163 = memo(function HeavyComponent12163({ config }: HeavyProps12163) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12163) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12163 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12163: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12163.displayName = 'HeavyComponent12163';
export default HeavyComponent12163;
