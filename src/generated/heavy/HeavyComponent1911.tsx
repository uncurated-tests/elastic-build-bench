'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1911<T> = T extends (infer U)[]
  ? DeepReadonlyArray1911<U>
  : T extends object
  ? DeepReadonlyObject1911<T>
  : T;

interface DeepReadonlyArray1911<T> extends ReadonlyArray<DeepReadonly1911<T>> {}

type DeepReadonlyObject1911<T> = {
  readonly [P in keyof T]: DeepReadonly1911<T[P]>;
};

type UnionToIntersection1911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1911<T> = UnionToIntersection1911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1911<T extends unknown[], V> = [...T, V];

type TuplifyUnion1911<T, L = LastOf1911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1911<TuplifyUnion1911<Exclude<T, L>>, L>;

type DeepPartial1911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1911<T[P]> }
  : T;

type Paths1911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1911<K, Paths1911<T[K], Prev1911[D]>> : never }[keyof T]
  : never;

type Prev1911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1911 {
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

type ConfigPaths1911 = Paths1911<NestedConfig1911>;

interface HeavyProps1911 {
  config: DeepPartial1911<NestedConfig1911>;
  path?: ConfigPaths1911;
}

const HeavyComponent1911 = memo(function HeavyComponent1911({ config }: HeavyProps1911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1911.displayName = 'HeavyComponent1911';
export default HeavyComponent1911;
