'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1953<T> = T extends (infer U)[]
  ? DeepReadonlyArray1953<U>
  : T extends object
  ? DeepReadonlyObject1953<T>
  : T;

interface DeepReadonlyArray1953<T> extends ReadonlyArray<DeepReadonly1953<T>> {}

type DeepReadonlyObject1953<T> = {
  readonly [P in keyof T]: DeepReadonly1953<T[P]>;
};

type UnionToIntersection1953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1953<T> = UnionToIntersection1953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1953<T extends unknown[], V> = [...T, V];

type TuplifyUnion1953<T, L = LastOf1953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1953<TuplifyUnion1953<Exclude<T, L>>, L>;

type DeepPartial1953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1953<T[P]> }
  : T;

type Paths1953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1953<K, Paths1953<T[K], Prev1953[D]>> : never }[keyof T]
  : never;

type Prev1953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1953 {
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

type ConfigPaths1953 = Paths1953<NestedConfig1953>;

interface HeavyProps1953 {
  config: DeepPartial1953<NestedConfig1953>;
  path?: ConfigPaths1953;
}

const HeavyComponent1953 = memo(function HeavyComponent1953({ config }: HeavyProps1953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1953.displayName = 'HeavyComponent1953';
export default HeavyComponent1953;
