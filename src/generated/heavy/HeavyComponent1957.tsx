'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1957<T> = T extends (infer U)[]
  ? DeepReadonlyArray1957<U>
  : T extends object
  ? DeepReadonlyObject1957<T>
  : T;

interface DeepReadonlyArray1957<T> extends ReadonlyArray<DeepReadonly1957<T>> {}

type DeepReadonlyObject1957<T> = {
  readonly [P in keyof T]: DeepReadonly1957<T[P]>;
};

type UnionToIntersection1957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1957<T> = UnionToIntersection1957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1957<T extends unknown[], V> = [...T, V];

type TuplifyUnion1957<T, L = LastOf1957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1957<TuplifyUnion1957<Exclude<T, L>>, L>;

type DeepPartial1957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1957<T[P]> }
  : T;

type Paths1957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1957<K, Paths1957<T[K], Prev1957[D]>> : never }[keyof T]
  : never;

type Prev1957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1957 {
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

type ConfigPaths1957 = Paths1957<NestedConfig1957>;

interface HeavyProps1957 {
  config: DeepPartial1957<NestedConfig1957>;
  path?: ConfigPaths1957;
}

const HeavyComponent1957 = memo(function HeavyComponent1957({ config }: HeavyProps1957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1957.displayName = 'HeavyComponent1957';
export default HeavyComponent1957;
