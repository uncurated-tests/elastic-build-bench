'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1925<T> = T extends (infer U)[]
  ? DeepReadonlyArray1925<U>
  : T extends object
  ? DeepReadonlyObject1925<T>
  : T;

interface DeepReadonlyArray1925<T> extends ReadonlyArray<DeepReadonly1925<T>> {}

type DeepReadonlyObject1925<T> = {
  readonly [P in keyof T]: DeepReadonly1925<T[P]>;
};

type UnionToIntersection1925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1925<T> = UnionToIntersection1925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1925<T extends unknown[], V> = [...T, V];

type TuplifyUnion1925<T, L = LastOf1925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1925<TuplifyUnion1925<Exclude<T, L>>, L>;

type DeepPartial1925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1925<T[P]> }
  : T;

type Paths1925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1925<K, Paths1925<T[K], Prev1925[D]>> : never }[keyof T]
  : never;

type Prev1925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1925 {
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

type ConfigPaths1925 = Paths1925<NestedConfig1925>;

interface HeavyProps1925 {
  config: DeepPartial1925<NestedConfig1925>;
  path?: ConfigPaths1925;
}

const HeavyComponent1925 = memo(function HeavyComponent1925({ config }: HeavyProps1925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1925.displayName = 'HeavyComponent1925';
export default HeavyComponent1925;
