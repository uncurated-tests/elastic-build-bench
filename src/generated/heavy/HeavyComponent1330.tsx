'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1330<T> = T extends (infer U)[]
  ? DeepReadonlyArray1330<U>
  : T extends object
  ? DeepReadonlyObject1330<T>
  : T;

interface DeepReadonlyArray1330<T> extends ReadonlyArray<DeepReadonly1330<T>> {}

type DeepReadonlyObject1330<T> = {
  readonly [P in keyof T]: DeepReadonly1330<T[P]>;
};

type UnionToIntersection1330<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1330<T> = UnionToIntersection1330<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1330<T extends unknown[], V> = [...T, V];

type TuplifyUnion1330<T, L = LastOf1330<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1330<TuplifyUnion1330<Exclude<T, L>>, L>;

type DeepPartial1330<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1330<T[P]> }
  : T;

type Paths1330<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1330<K, Paths1330<T[K], Prev1330[D]>> : never }[keyof T]
  : never;

type Prev1330 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1330<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1330 {
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

type ConfigPaths1330 = Paths1330<NestedConfig1330>;

interface HeavyProps1330 {
  config: DeepPartial1330<NestedConfig1330>;
  path?: ConfigPaths1330;
}

const HeavyComponent1330 = memo(function HeavyComponent1330({ config }: HeavyProps1330) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1330) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1330 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1330: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1330.displayName = 'HeavyComponent1330';
export default HeavyComponent1330;
