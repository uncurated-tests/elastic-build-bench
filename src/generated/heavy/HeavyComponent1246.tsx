'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1246<T> = T extends (infer U)[]
  ? DeepReadonlyArray1246<U>
  : T extends object
  ? DeepReadonlyObject1246<T>
  : T;

interface DeepReadonlyArray1246<T> extends ReadonlyArray<DeepReadonly1246<T>> {}

type DeepReadonlyObject1246<T> = {
  readonly [P in keyof T]: DeepReadonly1246<T[P]>;
};

type UnionToIntersection1246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1246<T> = UnionToIntersection1246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1246<T extends unknown[], V> = [...T, V];

type TuplifyUnion1246<T, L = LastOf1246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1246<TuplifyUnion1246<Exclude<T, L>>, L>;

type DeepPartial1246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1246<T[P]> }
  : T;

type Paths1246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1246<K, Paths1246<T[K], Prev1246[D]>> : never }[keyof T]
  : never;

type Prev1246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1246 {
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

type ConfigPaths1246 = Paths1246<NestedConfig1246>;

interface HeavyProps1246 {
  config: DeepPartial1246<NestedConfig1246>;
  path?: ConfigPaths1246;
}

const HeavyComponent1246 = memo(function HeavyComponent1246({ config }: HeavyProps1246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1246.displayName = 'HeavyComponent1246';
export default HeavyComponent1246;
