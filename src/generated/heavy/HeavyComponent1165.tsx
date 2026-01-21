'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1165<T> = T extends (infer U)[]
  ? DeepReadonlyArray1165<U>
  : T extends object
  ? DeepReadonlyObject1165<T>
  : T;

interface DeepReadonlyArray1165<T> extends ReadonlyArray<DeepReadonly1165<T>> {}

type DeepReadonlyObject1165<T> = {
  readonly [P in keyof T]: DeepReadonly1165<T[P]>;
};

type UnionToIntersection1165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1165<T> = UnionToIntersection1165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1165<T extends unknown[], V> = [...T, V];

type TuplifyUnion1165<T, L = LastOf1165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1165<TuplifyUnion1165<Exclude<T, L>>, L>;

type DeepPartial1165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1165<T[P]> }
  : T;

type Paths1165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1165<K, Paths1165<T[K], Prev1165[D]>> : never }[keyof T]
  : never;

type Prev1165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1165 {
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

type ConfigPaths1165 = Paths1165<NestedConfig1165>;

interface HeavyProps1165 {
  config: DeepPartial1165<NestedConfig1165>;
  path?: ConfigPaths1165;
}

const HeavyComponent1165 = memo(function HeavyComponent1165({ config }: HeavyProps1165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1165.displayName = 'HeavyComponent1165';
export default HeavyComponent1165;
