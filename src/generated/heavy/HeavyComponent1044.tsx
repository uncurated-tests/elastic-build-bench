'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1044<T> = T extends (infer U)[]
  ? DeepReadonlyArray1044<U>
  : T extends object
  ? DeepReadonlyObject1044<T>
  : T;

interface DeepReadonlyArray1044<T> extends ReadonlyArray<DeepReadonly1044<T>> {}

type DeepReadonlyObject1044<T> = {
  readonly [P in keyof T]: DeepReadonly1044<T[P]>;
};

type UnionToIntersection1044<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1044<T> = UnionToIntersection1044<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1044<T extends unknown[], V> = [...T, V];

type TuplifyUnion1044<T, L = LastOf1044<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1044<TuplifyUnion1044<Exclude<T, L>>, L>;

type DeepPartial1044<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1044<T[P]> }
  : T;

type Paths1044<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1044<K, Paths1044<T[K], Prev1044[D]>> : never }[keyof T]
  : never;

type Prev1044 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1044<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1044 {
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

type ConfigPaths1044 = Paths1044<NestedConfig1044>;

interface HeavyProps1044 {
  config: DeepPartial1044<NestedConfig1044>;
  path?: ConfigPaths1044;
}

const HeavyComponent1044 = memo(function HeavyComponent1044({ config }: HeavyProps1044) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1044) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1044 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1044: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1044.displayName = 'HeavyComponent1044';
export default HeavyComponent1044;
