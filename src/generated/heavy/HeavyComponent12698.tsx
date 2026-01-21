'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12698<T> = T extends (infer U)[]
  ? DeepReadonlyArray12698<U>
  : T extends object
  ? DeepReadonlyObject12698<T>
  : T;

interface DeepReadonlyArray12698<T> extends ReadonlyArray<DeepReadonly12698<T>> {}

type DeepReadonlyObject12698<T> = {
  readonly [P in keyof T]: DeepReadonly12698<T[P]>;
};

type UnionToIntersection12698<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12698<T> = UnionToIntersection12698<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12698<T extends unknown[], V> = [...T, V];

type TuplifyUnion12698<T, L = LastOf12698<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12698<TuplifyUnion12698<Exclude<T, L>>, L>;

type DeepPartial12698<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12698<T[P]> }
  : T;

type Paths12698<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12698<K, Paths12698<T[K], Prev12698[D]>> : never }[keyof T]
  : never;

type Prev12698 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12698<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12698 {
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

type ConfigPaths12698 = Paths12698<NestedConfig12698>;

interface HeavyProps12698 {
  config: DeepPartial12698<NestedConfig12698>;
  path?: ConfigPaths12698;
}

const HeavyComponent12698 = memo(function HeavyComponent12698({ config }: HeavyProps12698) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12698) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12698 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12698: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12698.displayName = 'HeavyComponent12698';
export default HeavyComponent12698;
