'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12323<T> = T extends (infer U)[]
  ? DeepReadonlyArray12323<U>
  : T extends object
  ? DeepReadonlyObject12323<T>
  : T;

interface DeepReadonlyArray12323<T> extends ReadonlyArray<DeepReadonly12323<T>> {}

type DeepReadonlyObject12323<T> = {
  readonly [P in keyof T]: DeepReadonly12323<T[P]>;
};

type UnionToIntersection12323<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12323<T> = UnionToIntersection12323<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12323<T extends unknown[], V> = [...T, V];

type TuplifyUnion12323<T, L = LastOf12323<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12323<TuplifyUnion12323<Exclude<T, L>>, L>;

type DeepPartial12323<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12323<T[P]> }
  : T;

type Paths12323<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12323<K, Paths12323<T[K], Prev12323[D]>> : never }[keyof T]
  : never;

type Prev12323 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12323<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12323 {
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

type ConfigPaths12323 = Paths12323<NestedConfig12323>;

interface HeavyProps12323 {
  config: DeepPartial12323<NestedConfig12323>;
  path?: ConfigPaths12323;
}

const HeavyComponent12323 = memo(function HeavyComponent12323({ config }: HeavyProps12323) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12323) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12323 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12323: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12323.displayName = 'HeavyComponent12323';
export default HeavyComponent12323;
