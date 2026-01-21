'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1841<T> = T extends (infer U)[]
  ? DeepReadonlyArray1841<U>
  : T extends object
  ? DeepReadonlyObject1841<T>
  : T;

interface DeepReadonlyArray1841<T> extends ReadonlyArray<DeepReadonly1841<T>> {}

type DeepReadonlyObject1841<T> = {
  readonly [P in keyof T]: DeepReadonly1841<T[P]>;
};

type UnionToIntersection1841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1841<T> = UnionToIntersection1841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1841<T extends unknown[], V> = [...T, V];

type TuplifyUnion1841<T, L = LastOf1841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1841<TuplifyUnion1841<Exclude<T, L>>, L>;

type DeepPartial1841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1841<T[P]> }
  : T;

type Paths1841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1841<K, Paths1841<T[K], Prev1841[D]>> : never }[keyof T]
  : never;

type Prev1841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1841 {
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

type ConfigPaths1841 = Paths1841<NestedConfig1841>;

interface HeavyProps1841 {
  config: DeepPartial1841<NestedConfig1841>;
  path?: ConfigPaths1841;
}

const HeavyComponent1841 = memo(function HeavyComponent1841({ config }: HeavyProps1841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1841.displayName = 'HeavyComponent1841';
export default HeavyComponent1841;
