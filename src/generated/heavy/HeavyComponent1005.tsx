'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1005<T> = T extends (infer U)[]
  ? DeepReadonlyArray1005<U>
  : T extends object
  ? DeepReadonlyObject1005<T>
  : T;

interface DeepReadonlyArray1005<T> extends ReadonlyArray<DeepReadonly1005<T>> {}

type DeepReadonlyObject1005<T> = {
  readonly [P in keyof T]: DeepReadonly1005<T[P]>;
};

type UnionToIntersection1005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1005<T> = UnionToIntersection1005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1005<T extends unknown[], V> = [...T, V];

type TuplifyUnion1005<T, L = LastOf1005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1005<TuplifyUnion1005<Exclude<T, L>>, L>;

type DeepPartial1005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1005<T[P]> }
  : T;

type Paths1005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1005<K, Paths1005<T[K], Prev1005[D]>> : never }[keyof T]
  : never;

type Prev1005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1005 {
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

type ConfigPaths1005 = Paths1005<NestedConfig1005>;

interface HeavyProps1005 {
  config: DeepPartial1005<NestedConfig1005>;
  path?: ConfigPaths1005;
}

const HeavyComponent1005 = memo(function HeavyComponent1005({ config }: HeavyProps1005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1005.displayName = 'HeavyComponent1005';
export default HeavyComponent1005;
