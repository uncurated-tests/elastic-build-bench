'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12920<T> = T extends (infer U)[]
  ? DeepReadonlyArray12920<U>
  : T extends object
  ? DeepReadonlyObject12920<T>
  : T;

interface DeepReadonlyArray12920<T> extends ReadonlyArray<DeepReadonly12920<T>> {}

type DeepReadonlyObject12920<T> = {
  readonly [P in keyof T]: DeepReadonly12920<T[P]>;
};

type UnionToIntersection12920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12920<T> = UnionToIntersection12920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12920<T extends unknown[], V> = [...T, V];

type TuplifyUnion12920<T, L = LastOf12920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12920<TuplifyUnion12920<Exclude<T, L>>, L>;

type DeepPartial12920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12920<T[P]> }
  : T;

type Paths12920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12920<K, Paths12920<T[K], Prev12920[D]>> : never }[keyof T]
  : never;

type Prev12920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12920 {
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

type ConfigPaths12920 = Paths12920<NestedConfig12920>;

interface HeavyProps12920 {
  config: DeepPartial12920<NestedConfig12920>;
  path?: ConfigPaths12920;
}

const HeavyComponent12920 = memo(function HeavyComponent12920({ config }: HeavyProps12920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12920.displayName = 'HeavyComponent12920';
export default HeavyComponent12920;
