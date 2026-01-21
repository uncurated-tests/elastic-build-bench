'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12205<T> = T extends (infer U)[]
  ? DeepReadonlyArray12205<U>
  : T extends object
  ? DeepReadonlyObject12205<T>
  : T;

interface DeepReadonlyArray12205<T> extends ReadonlyArray<DeepReadonly12205<T>> {}

type DeepReadonlyObject12205<T> = {
  readonly [P in keyof T]: DeepReadonly12205<T[P]>;
};

type UnionToIntersection12205<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12205<T> = UnionToIntersection12205<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12205<T extends unknown[], V> = [...T, V];

type TuplifyUnion12205<T, L = LastOf12205<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12205<TuplifyUnion12205<Exclude<T, L>>, L>;

type DeepPartial12205<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12205<T[P]> }
  : T;

type Paths12205<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12205<K, Paths12205<T[K], Prev12205[D]>> : never }[keyof T]
  : never;

type Prev12205 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12205<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12205 {
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

type ConfigPaths12205 = Paths12205<NestedConfig12205>;

interface HeavyProps12205 {
  config: DeepPartial12205<NestedConfig12205>;
  path?: ConfigPaths12205;
}

const HeavyComponent12205 = memo(function HeavyComponent12205({ config }: HeavyProps12205) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12205) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12205 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12205: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12205.displayName = 'HeavyComponent12205';
export default HeavyComponent12205;
