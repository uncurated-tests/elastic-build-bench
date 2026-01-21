'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12577<T> = T extends (infer U)[]
  ? DeepReadonlyArray12577<U>
  : T extends object
  ? DeepReadonlyObject12577<T>
  : T;

interface DeepReadonlyArray12577<T> extends ReadonlyArray<DeepReadonly12577<T>> {}

type DeepReadonlyObject12577<T> = {
  readonly [P in keyof T]: DeepReadonly12577<T[P]>;
};

type UnionToIntersection12577<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12577<T> = UnionToIntersection12577<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12577<T extends unknown[], V> = [...T, V];

type TuplifyUnion12577<T, L = LastOf12577<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12577<TuplifyUnion12577<Exclude<T, L>>, L>;

type DeepPartial12577<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12577<T[P]> }
  : T;

type Paths12577<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12577<K, Paths12577<T[K], Prev12577[D]>> : never }[keyof T]
  : never;

type Prev12577 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12577<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12577 {
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

type ConfigPaths12577 = Paths12577<NestedConfig12577>;

interface HeavyProps12577 {
  config: DeepPartial12577<NestedConfig12577>;
  path?: ConfigPaths12577;
}

const HeavyComponent12577 = memo(function HeavyComponent12577({ config }: HeavyProps12577) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12577) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12577 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12577: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12577.displayName = 'HeavyComponent12577';
export default HeavyComponent12577;
