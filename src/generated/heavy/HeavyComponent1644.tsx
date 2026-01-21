'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1644<T> = T extends (infer U)[]
  ? DeepReadonlyArray1644<U>
  : T extends object
  ? DeepReadonlyObject1644<T>
  : T;

interface DeepReadonlyArray1644<T> extends ReadonlyArray<DeepReadonly1644<T>> {}

type DeepReadonlyObject1644<T> = {
  readonly [P in keyof T]: DeepReadonly1644<T[P]>;
};

type UnionToIntersection1644<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1644<T> = UnionToIntersection1644<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1644<T extends unknown[], V> = [...T, V];

type TuplifyUnion1644<T, L = LastOf1644<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1644<TuplifyUnion1644<Exclude<T, L>>, L>;

type DeepPartial1644<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1644<T[P]> }
  : T;

type Paths1644<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1644<K, Paths1644<T[K], Prev1644[D]>> : never }[keyof T]
  : never;

type Prev1644 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1644<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1644 {
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

type ConfigPaths1644 = Paths1644<NestedConfig1644>;

interface HeavyProps1644 {
  config: DeepPartial1644<NestedConfig1644>;
  path?: ConfigPaths1644;
}

const HeavyComponent1644 = memo(function HeavyComponent1644({ config }: HeavyProps1644) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1644) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1644 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1644: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1644.displayName = 'HeavyComponent1644';
export default HeavyComponent1644;
