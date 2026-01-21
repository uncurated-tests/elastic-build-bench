'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12917<T> = T extends (infer U)[]
  ? DeepReadonlyArray12917<U>
  : T extends object
  ? DeepReadonlyObject12917<T>
  : T;

interface DeepReadonlyArray12917<T> extends ReadonlyArray<DeepReadonly12917<T>> {}

type DeepReadonlyObject12917<T> = {
  readonly [P in keyof T]: DeepReadonly12917<T[P]>;
};

type UnionToIntersection12917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12917<T> = UnionToIntersection12917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12917<T extends unknown[], V> = [...T, V];

type TuplifyUnion12917<T, L = LastOf12917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12917<TuplifyUnion12917<Exclude<T, L>>, L>;

type DeepPartial12917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12917<T[P]> }
  : T;

type Paths12917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12917<K, Paths12917<T[K], Prev12917[D]>> : never }[keyof T]
  : never;

type Prev12917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12917 {
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

type ConfigPaths12917 = Paths12917<NestedConfig12917>;

interface HeavyProps12917 {
  config: DeepPartial12917<NestedConfig12917>;
  path?: ConfigPaths12917;
}

const HeavyComponent12917 = memo(function HeavyComponent12917({ config }: HeavyProps12917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12917.displayName = 'HeavyComponent12917';
export default HeavyComponent12917;
