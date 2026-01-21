'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12947<T> = T extends (infer U)[]
  ? DeepReadonlyArray12947<U>
  : T extends object
  ? DeepReadonlyObject12947<T>
  : T;

interface DeepReadonlyArray12947<T> extends ReadonlyArray<DeepReadonly12947<T>> {}

type DeepReadonlyObject12947<T> = {
  readonly [P in keyof T]: DeepReadonly12947<T[P]>;
};

type UnionToIntersection12947<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12947<T> = UnionToIntersection12947<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12947<T extends unknown[], V> = [...T, V];

type TuplifyUnion12947<T, L = LastOf12947<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12947<TuplifyUnion12947<Exclude<T, L>>, L>;

type DeepPartial12947<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12947<T[P]> }
  : T;

type Paths12947<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12947<K, Paths12947<T[K], Prev12947[D]>> : never }[keyof T]
  : never;

type Prev12947 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12947<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12947 {
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

type ConfigPaths12947 = Paths12947<NestedConfig12947>;

interface HeavyProps12947 {
  config: DeepPartial12947<NestedConfig12947>;
  path?: ConfigPaths12947;
}

const HeavyComponent12947 = memo(function HeavyComponent12947({ config }: HeavyProps12947) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12947) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12947 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12947: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12947.displayName = 'HeavyComponent12947';
export default HeavyComponent12947;
