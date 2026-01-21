'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1804<T> = T extends (infer U)[]
  ? DeepReadonlyArray1804<U>
  : T extends object
  ? DeepReadonlyObject1804<T>
  : T;

interface DeepReadonlyArray1804<T> extends ReadonlyArray<DeepReadonly1804<T>> {}

type DeepReadonlyObject1804<T> = {
  readonly [P in keyof T]: DeepReadonly1804<T[P]>;
};

type UnionToIntersection1804<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1804<T> = UnionToIntersection1804<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1804<T extends unknown[], V> = [...T, V];

type TuplifyUnion1804<T, L = LastOf1804<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1804<TuplifyUnion1804<Exclude<T, L>>, L>;

type DeepPartial1804<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1804<T[P]> }
  : T;

type Paths1804<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1804<K, Paths1804<T[K], Prev1804[D]>> : never }[keyof T]
  : never;

type Prev1804 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1804<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1804 {
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

type ConfigPaths1804 = Paths1804<NestedConfig1804>;

interface HeavyProps1804 {
  config: DeepPartial1804<NestedConfig1804>;
  path?: ConfigPaths1804;
}

const HeavyComponent1804 = memo(function HeavyComponent1804({ config }: HeavyProps1804) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1804) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1804 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1804: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1804.displayName = 'HeavyComponent1804';
export default HeavyComponent1804;
