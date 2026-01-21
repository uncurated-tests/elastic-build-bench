'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12714<T> = T extends (infer U)[]
  ? DeepReadonlyArray12714<U>
  : T extends object
  ? DeepReadonlyObject12714<T>
  : T;

interface DeepReadonlyArray12714<T> extends ReadonlyArray<DeepReadonly12714<T>> {}

type DeepReadonlyObject12714<T> = {
  readonly [P in keyof T]: DeepReadonly12714<T[P]>;
};

type UnionToIntersection12714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12714<T> = UnionToIntersection12714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12714<T extends unknown[], V> = [...T, V];

type TuplifyUnion12714<T, L = LastOf12714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12714<TuplifyUnion12714<Exclude<T, L>>, L>;

type DeepPartial12714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12714<T[P]> }
  : T;

type Paths12714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12714<K, Paths12714<T[K], Prev12714[D]>> : never }[keyof T]
  : never;

type Prev12714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12714 {
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

type ConfigPaths12714 = Paths12714<NestedConfig12714>;

interface HeavyProps12714 {
  config: DeepPartial12714<NestedConfig12714>;
  path?: ConfigPaths12714;
}

const HeavyComponent12714 = memo(function HeavyComponent12714({ config }: HeavyProps12714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12714.displayName = 'HeavyComponent12714';
export default HeavyComponent12714;
