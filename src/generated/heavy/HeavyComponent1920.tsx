'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1920<T> = T extends (infer U)[]
  ? DeepReadonlyArray1920<U>
  : T extends object
  ? DeepReadonlyObject1920<T>
  : T;

interface DeepReadonlyArray1920<T> extends ReadonlyArray<DeepReadonly1920<T>> {}

type DeepReadonlyObject1920<T> = {
  readonly [P in keyof T]: DeepReadonly1920<T[P]>;
};

type UnionToIntersection1920<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1920<T> = UnionToIntersection1920<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1920<T extends unknown[], V> = [...T, V];

type TuplifyUnion1920<T, L = LastOf1920<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1920<TuplifyUnion1920<Exclude<T, L>>, L>;

type DeepPartial1920<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1920<T[P]> }
  : T;

type Paths1920<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1920<K, Paths1920<T[K], Prev1920[D]>> : never }[keyof T]
  : never;

type Prev1920 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1920<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1920 {
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

type ConfigPaths1920 = Paths1920<NestedConfig1920>;

interface HeavyProps1920 {
  config: DeepPartial1920<NestedConfig1920>;
  path?: ConfigPaths1920;
}

const HeavyComponent1920 = memo(function HeavyComponent1920({ config }: HeavyProps1920) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1920) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1920 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1920: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1920.displayName = 'HeavyComponent1920';
export default HeavyComponent1920;
