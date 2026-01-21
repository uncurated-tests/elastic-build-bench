'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1184<T> = T extends (infer U)[]
  ? DeepReadonlyArray1184<U>
  : T extends object
  ? DeepReadonlyObject1184<T>
  : T;

interface DeepReadonlyArray1184<T> extends ReadonlyArray<DeepReadonly1184<T>> {}

type DeepReadonlyObject1184<T> = {
  readonly [P in keyof T]: DeepReadonly1184<T[P]>;
};

type UnionToIntersection1184<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1184<T> = UnionToIntersection1184<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1184<T extends unknown[], V> = [...T, V];

type TuplifyUnion1184<T, L = LastOf1184<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1184<TuplifyUnion1184<Exclude<T, L>>, L>;

type DeepPartial1184<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1184<T[P]> }
  : T;

type Paths1184<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1184<K, Paths1184<T[K], Prev1184[D]>> : never }[keyof T]
  : never;

type Prev1184 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1184<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1184 {
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

type ConfigPaths1184 = Paths1184<NestedConfig1184>;

interface HeavyProps1184 {
  config: DeepPartial1184<NestedConfig1184>;
  path?: ConfigPaths1184;
}

const HeavyComponent1184 = memo(function HeavyComponent1184({ config }: HeavyProps1184) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1184) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1184 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1184: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1184.displayName = 'HeavyComponent1184';
export default HeavyComponent1184;
