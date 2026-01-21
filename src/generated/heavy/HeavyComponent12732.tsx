'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12732<T> = T extends (infer U)[]
  ? DeepReadonlyArray12732<U>
  : T extends object
  ? DeepReadonlyObject12732<T>
  : T;

interface DeepReadonlyArray12732<T> extends ReadonlyArray<DeepReadonly12732<T>> {}

type DeepReadonlyObject12732<T> = {
  readonly [P in keyof T]: DeepReadonly12732<T[P]>;
};

type UnionToIntersection12732<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12732<T> = UnionToIntersection12732<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12732<T extends unknown[], V> = [...T, V];

type TuplifyUnion12732<T, L = LastOf12732<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12732<TuplifyUnion12732<Exclude<T, L>>, L>;

type DeepPartial12732<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12732<T[P]> }
  : T;

type Paths12732<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12732<K, Paths12732<T[K], Prev12732[D]>> : never }[keyof T]
  : never;

type Prev12732 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12732<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12732 {
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

type ConfigPaths12732 = Paths12732<NestedConfig12732>;

interface HeavyProps12732 {
  config: DeepPartial12732<NestedConfig12732>;
  path?: ConfigPaths12732;
}

const HeavyComponent12732 = memo(function HeavyComponent12732({ config }: HeavyProps12732) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12732) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12732 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12732: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12732.displayName = 'HeavyComponent12732';
export default HeavyComponent12732;
