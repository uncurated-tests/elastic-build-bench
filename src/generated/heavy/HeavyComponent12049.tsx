'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12049<T> = T extends (infer U)[]
  ? DeepReadonlyArray12049<U>
  : T extends object
  ? DeepReadonlyObject12049<T>
  : T;

interface DeepReadonlyArray12049<T> extends ReadonlyArray<DeepReadonly12049<T>> {}

type DeepReadonlyObject12049<T> = {
  readonly [P in keyof T]: DeepReadonly12049<T[P]>;
};

type UnionToIntersection12049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12049<T> = UnionToIntersection12049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12049<T extends unknown[], V> = [...T, V];

type TuplifyUnion12049<T, L = LastOf12049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12049<TuplifyUnion12049<Exclude<T, L>>, L>;

type DeepPartial12049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12049<T[P]> }
  : T;

type Paths12049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12049<K, Paths12049<T[K], Prev12049[D]>> : never }[keyof T]
  : never;

type Prev12049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12049 {
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

type ConfigPaths12049 = Paths12049<NestedConfig12049>;

interface HeavyProps12049 {
  config: DeepPartial12049<NestedConfig12049>;
  path?: ConfigPaths12049;
}

const HeavyComponent12049 = memo(function HeavyComponent12049({ config }: HeavyProps12049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12049.displayName = 'HeavyComponent12049';
export default HeavyComponent12049;
