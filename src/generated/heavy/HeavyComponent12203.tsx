'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12203<T> = T extends (infer U)[]
  ? DeepReadonlyArray12203<U>
  : T extends object
  ? DeepReadonlyObject12203<T>
  : T;

interface DeepReadonlyArray12203<T> extends ReadonlyArray<DeepReadonly12203<T>> {}

type DeepReadonlyObject12203<T> = {
  readonly [P in keyof T]: DeepReadonly12203<T[P]>;
};

type UnionToIntersection12203<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12203<T> = UnionToIntersection12203<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12203<T extends unknown[], V> = [...T, V];

type TuplifyUnion12203<T, L = LastOf12203<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12203<TuplifyUnion12203<Exclude<T, L>>, L>;

type DeepPartial12203<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12203<T[P]> }
  : T;

type Paths12203<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12203<K, Paths12203<T[K], Prev12203[D]>> : never }[keyof T]
  : never;

type Prev12203 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12203<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12203 {
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

type ConfigPaths12203 = Paths12203<NestedConfig12203>;

interface HeavyProps12203 {
  config: DeepPartial12203<NestedConfig12203>;
  path?: ConfigPaths12203;
}

const HeavyComponent12203 = memo(function HeavyComponent12203({ config }: HeavyProps12203) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12203) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12203 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12203: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12203.displayName = 'HeavyComponent12203';
export default HeavyComponent12203;
