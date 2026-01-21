'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12214<T> = T extends (infer U)[]
  ? DeepReadonlyArray12214<U>
  : T extends object
  ? DeepReadonlyObject12214<T>
  : T;

interface DeepReadonlyArray12214<T> extends ReadonlyArray<DeepReadonly12214<T>> {}

type DeepReadonlyObject12214<T> = {
  readonly [P in keyof T]: DeepReadonly12214<T[P]>;
};

type UnionToIntersection12214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12214<T> = UnionToIntersection12214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12214<T extends unknown[], V> = [...T, V];

type TuplifyUnion12214<T, L = LastOf12214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12214<TuplifyUnion12214<Exclude<T, L>>, L>;

type DeepPartial12214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12214<T[P]> }
  : T;

type Paths12214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12214<K, Paths12214<T[K], Prev12214[D]>> : never }[keyof T]
  : never;

type Prev12214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12214 {
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

type ConfigPaths12214 = Paths12214<NestedConfig12214>;

interface HeavyProps12214 {
  config: DeepPartial12214<NestedConfig12214>;
  path?: ConfigPaths12214;
}

const HeavyComponent12214 = memo(function HeavyComponent12214({ config }: HeavyProps12214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12214.displayName = 'HeavyComponent12214';
export default HeavyComponent12214;
