'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1276<T> = T extends (infer U)[]
  ? DeepReadonlyArray1276<U>
  : T extends object
  ? DeepReadonlyObject1276<T>
  : T;

interface DeepReadonlyArray1276<T> extends ReadonlyArray<DeepReadonly1276<T>> {}

type DeepReadonlyObject1276<T> = {
  readonly [P in keyof T]: DeepReadonly1276<T[P]>;
};

type UnionToIntersection1276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1276<T> = UnionToIntersection1276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1276<T extends unknown[], V> = [...T, V];

type TuplifyUnion1276<T, L = LastOf1276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1276<TuplifyUnion1276<Exclude<T, L>>, L>;

type DeepPartial1276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1276<T[P]> }
  : T;

type Paths1276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1276<K, Paths1276<T[K], Prev1276[D]>> : never }[keyof T]
  : never;

type Prev1276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1276 {
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

type ConfigPaths1276 = Paths1276<NestedConfig1276>;

interface HeavyProps1276 {
  config: DeepPartial1276<NestedConfig1276>;
  path?: ConfigPaths1276;
}

const HeavyComponent1276 = memo(function HeavyComponent1276({ config }: HeavyProps1276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1276.displayName = 'HeavyComponent1276';
export default HeavyComponent1276;
