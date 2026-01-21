'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12259<T> = T extends (infer U)[]
  ? DeepReadonlyArray12259<U>
  : T extends object
  ? DeepReadonlyObject12259<T>
  : T;

interface DeepReadonlyArray12259<T> extends ReadonlyArray<DeepReadonly12259<T>> {}

type DeepReadonlyObject12259<T> = {
  readonly [P in keyof T]: DeepReadonly12259<T[P]>;
};

type UnionToIntersection12259<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12259<T> = UnionToIntersection12259<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12259<T extends unknown[], V> = [...T, V];

type TuplifyUnion12259<T, L = LastOf12259<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12259<TuplifyUnion12259<Exclude<T, L>>, L>;

type DeepPartial12259<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12259<T[P]> }
  : T;

type Paths12259<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12259<K, Paths12259<T[K], Prev12259[D]>> : never }[keyof T]
  : never;

type Prev12259 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12259<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12259 {
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

type ConfigPaths12259 = Paths12259<NestedConfig12259>;

interface HeavyProps12259 {
  config: DeepPartial12259<NestedConfig12259>;
  path?: ConfigPaths12259;
}

const HeavyComponent12259 = memo(function HeavyComponent12259({ config }: HeavyProps12259) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12259) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12259 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12259: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12259.displayName = 'HeavyComponent12259';
export default HeavyComponent12259;
