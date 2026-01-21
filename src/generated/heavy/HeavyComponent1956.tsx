'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1956<T> = T extends (infer U)[]
  ? DeepReadonlyArray1956<U>
  : T extends object
  ? DeepReadonlyObject1956<T>
  : T;

interface DeepReadonlyArray1956<T> extends ReadonlyArray<DeepReadonly1956<T>> {}

type DeepReadonlyObject1956<T> = {
  readonly [P in keyof T]: DeepReadonly1956<T[P]>;
};

type UnionToIntersection1956<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1956<T> = UnionToIntersection1956<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1956<T extends unknown[], V> = [...T, V];

type TuplifyUnion1956<T, L = LastOf1956<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1956<TuplifyUnion1956<Exclude<T, L>>, L>;

type DeepPartial1956<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1956<T[P]> }
  : T;

type Paths1956<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1956<K, Paths1956<T[K], Prev1956[D]>> : never }[keyof T]
  : never;

type Prev1956 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1956<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1956 {
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

type ConfigPaths1956 = Paths1956<NestedConfig1956>;

interface HeavyProps1956 {
  config: DeepPartial1956<NestedConfig1956>;
  path?: ConfigPaths1956;
}

const HeavyComponent1956 = memo(function HeavyComponent1956({ config }: HeavyProps1956) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1956) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1956 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1956: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1956.displayName = 'HeavyComponent1956';
export default HeavyComponent1956;
