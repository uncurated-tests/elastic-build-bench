'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12606<T> = T extends (infer U)[]
  ? DeepReadonlyArray12606<U>
  : T extends object
  ? DeepReadonlyObject12606<T>
  : T;

interface DeepReadonlyArray12606<T> extends ReadonlyArray<DeepReadonly12606<T>> {}

type DeepReadonlyObject12606<T> = {
  readonly [P in keyof T]: DeepReadonly12606<T[P]>;
};

type UnionToIntersection12606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12606<T> = UnionToIntersection12606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12606<T extends unknown[], V> = [...T, V];

type TuplifyUnion12606<T, L = LastOf12606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12606<TuplifyUnion12606<Exclude<T, L>>, L>;

type DeepPartial12606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12606<T[P]> }
  : T;

type Paths12606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12606<K, Paths12606<T[K], Prev12606[D]>> : never }[keyof T]
  : never;

type Prev12606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12606 {
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

type ConfigPaths12606 = Paths12606<NestedConfig12606>;

interface HeavyProps12606 {
  config: DeepPartial12606<NestedConfig12606>;
  path?: ConfigPaths12606;
}

const HeavyComponent12606 = memo(function HeavyComponent12606({ config }: HeavyProps12606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12606.displayName = 'HeavyComponent12606';
export default HeavyComponent12606;
