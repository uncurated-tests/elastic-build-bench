'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1898<T> = T extends (infer U)[]
  ? DeepReadonlyArray1898<U>
  : T extends object
  ? DeepReadonlyObject1898<T>
  : T;

interface DeepReadonlyArray1898<T> extends ReadonlyArray<DeepReadonly1898<T>> {}

type DeepReadonlyObject1898<T> = {
  readonly [P in keyof T]: DeepReadonly1898<T[P]>;
};

type UnionToIntersection1898<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1898<T> = UnionToIntersection1898<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1898<T extends unknown[], V> = [...T, V];

type TuplifyUnion1898<T, L = LastOf1898<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1898<TuplifyUnion1898<Exclude<T, L>>, L>;

type DeepPartial1898<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1898<T[P]> }
  : T;

type Paths1898<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1898<K, Paths1898<T[K], Prev1898[D]>> : never }[keyof T]
  : never;

type Prev1898 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1898<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1898 {
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

type ConfigPaths1898 = Paths1898<NestedConfig1898>;

interface HeavyProps1898 {
  config: DeepPartial1898<NestedConfig1898>;
  path?: ConfigPaths1898;
}

const HeavyComponent1898 = memo(function HeavyComponent1898({ config }: HeavyProps1898) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1898) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1898 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1898: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1898.displayName = 'HeavyComponent1898';
export default HeavyComponent1898;
