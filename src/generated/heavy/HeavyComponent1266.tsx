'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1266<T> = T extends (infer U)[]
  ? DeepReadonlyArray1266<U>
  : T extends object
  ? DeepReadonlyObject1266<T>
  : T;

interface DeepReadonlyArray1266<T> extends ReadonlyArray<DeepReadonly1266<T>> {}

type DeepReadonlyObject1266<T> = {
  readonly [P in keyof T]: DeepReadonly1266<T[P]>;
};

type UnionToIntersection1266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1266<T> = UnionToIntersection1266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1266<T extends unknown[], V> = [...T, V];

type TuplifyUnion1266<T, L = LastOf1266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1266<TuplifyUnion1266<Exclude<T, L>>, L>;

type DeepPartial1266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1266<T[P]> }
  : T;

type Paths1266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1266<K, Paths1266<T[K], Prev1266[D]>> : never }[keyof T]
  : never;

type Prev1266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1266 {
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

type ConfigPaths1266 = Paths1266<NestedConfig1266>;

interface HeavyProps1266 {
  config: DeepPartial1266<NestedConfig1266>;
  path?: ConfigPaths1266;
}

const HeavyComponent1266 = memo(function HeavyComponent1266({ config }: HeavyProps1266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1266.displayName = 'HeavyComponent1266';
export default HeavyComponent1266;
