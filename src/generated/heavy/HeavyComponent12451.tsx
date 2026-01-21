'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12451<T> = T extends (infer U)[]
  ? DeepReadonlyArray12451<U>
  : T extends object
  ? DeepReadonlyObject12451<T>
  : T;

interface DeepReadonlyArray12451<T> extends ReadonlyArray<DeepReadonly12451<T>> {}

type DeepReadonlyObject12451<T> = {
  readonly [P in keyof T]: DeepReadonly12451<T[P]>;
};

type UnionToIntersection12451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12451<T> = UnionToIntersection12451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12451<T extends unknown[], V> = [...T, V];

type TuplifyUnion12451<T, L = LastOf12451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12451<TuplifyUnion12451<Exclude<T, L>>, L>;

type DeepPartial12451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12451<T[P]> }
  : T;

type Paths12451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12451<K, Paths12451<T[K], Prev12451[D]>> : never }[keyof T]
  : never;

type Prev12451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12451 {
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

type ConfigPaths12451 = Paths12451<NestedConfig12451>;

interface HeavyProps12451 {
  config: DeepPartial12451<NestedConfig12451>;
  path?: ConfigPaths12451;
}

const HeavyComponent12451 = memo(function HeavyComponent12451({ config }: HeavyProps12451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12451.displayName = 'HeavyComponent12451';
export default HeavyComponent12451;
