'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1472<T> = T extends (infer U)[]
  ? DeepReadonlyArray1472<U>
  : T extends object
  ? DeepReadonlyObject1472<T>
  : T;

interface DeepReadonlyArray1472<T> extends ReadonlyArray<DeepReadonly1472<T>> {}

type DeepReadonlyObject1472<T> = {
  readonly [P in keyof T]: DeepReadonly1472<T[P]>;
};

type UnionToIntersection1472<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1472<T> = UnionToIntersection1472<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1472<T extends unknown[], V> = [...T, V];

type TuplifyUnion1472<T, L = LastOf1472<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1472<TuplifyUnion1472<Exclude<T, L>>, L>;

type DeepPartial1472<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1472<T[P]> }
  : T;

type Paths1472<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1472<K, Paths1472<T[K], Prev1472[D]>> : never }[keyof T]
  : never;

type Prev1472 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1472<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1472 {
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

type ConfigPaths1472 = Paths1472<NestedConfig1472>;

interface HeavyProps1472 {
  config: DeepPartial1472<NestedConfig1472>;
  path?: ConfigPaths1472;
}

const HeavyComponent1472 = memo(function HeavyComponent1472({ config }: HeavyProps1472) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1472) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1472 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1472: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1472.displayName = 'HeavyComponent1472';
export default HeavyComponent1472;
