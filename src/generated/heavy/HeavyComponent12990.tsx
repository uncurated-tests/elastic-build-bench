'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12990<T> = T extends (infer U)[]
  ? DeepReadonlyArray12990<U>
  : T extends object
  ? DeepReadonlyObject12990<T>
  : T;

interface DeepReadonlyArray12990<T> extends ReadonlyArray<DeepReadonly12990<T>> {}

type DeepReadonlyObject12990<T> = {
  readonly [P in keyof T]: DeepReadonly12990<T[P]>;
};

type UnionToIntersection12990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12990<T> = UnionToIntersection12990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12990<T extends unknown[], V> = [...T, V];

type TuplifyUnion12990<T, L = LastOf12990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12990<TuplifyUnion12990<Exclude<T, L>>, L>;

type DeepPartial12990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12990<T[P]> }
  : T;

type Paths12990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12990<K, Paths12990<T[K], Prev12990[D]>> : never }[keyof T]
  : never;

type Prev12990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12990 {
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

type ConfigPaths12990 = Paths12990<NestedConfig12990>;

interface HeavyProps12990 {
  config: DeepPartial12990<NestedConfig12990>;
  path?: ConfigPaths12990;
}

const HeavyComponent12990 = memo(function HeavyComponent12990({ config }: HeavyProps12990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12990.displayName = 'HeavyComponent12990';
export default HeavyComponent12990;
