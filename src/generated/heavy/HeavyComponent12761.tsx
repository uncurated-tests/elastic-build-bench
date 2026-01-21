'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12761<T> = T extends (infer U)[]
  ? DeepReadonlyArray12761<U>
  : T extends object
  ? DeepReadonlyObject12761<T>
  : T;

interface DeepReadonlyArray12761<T> extends ReadonlyArray<DeepReadonly12761<T>> {}

type DeepReadonlyObject12761<T> = {
  readonly [P in keyof T]: DeepReadonly12761<T[P]>;
};

type UnionToIntersection12761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12761<T> = UnionToIntersection12761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12761<T extends unknown[], V> = [...T, V];

type TuplifyUnion12761<T, L = LastOf12761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12761<TuplifyUnion12761<Exclude<T, L>>, L>;

type DeepPartial12761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12761<T[P]> }
  : T;

type Paths12761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12761<K, Paths12761<T[K], Prev12761[D]>> : never }[keyof T]
  : never;

type Prev12761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12761 {
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

type ConfigPaths12761 = Paths12761<NestedConfig12761>;

interface HeavyProps12761 {
  config: DeepPartial12761<NestedConfig12761>;
  path?: ConfigPaths12761;
}

const HeavyComponent12761 = memo(function HeavyComponent12761({ config }: HeavyProps12761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12761.displayName = 'HeavyComponent12761';
export default HeavyComponent12761;
