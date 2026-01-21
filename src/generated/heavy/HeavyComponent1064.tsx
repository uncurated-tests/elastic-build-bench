'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1064<T> = T extends (infer U)[]
  ? DeepReadonlyArray1064<U>
  : T extends object
  ? DeepReadonlyObject1064<T>
  : T;

interface DeepReadonlyArray1064<T> extends ReadonlyArray<DeepReadonly1064<T>> {}

type DeepReadonlyObject1064<T> = {
  readonly [P in keyof T]: DeepReadonly1064<T[P]>;
};

type UnionToIntersection1064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1064<T> = UnionToIntersection1064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1064<T extends unknown[], V> = [...T, V];

type TuplifyUnion1064<T, L = LastOf1064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1064<TuplifyUnion1064<Exclude<T, L>>, L>;

type DeepPartial1064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1064<T[P]> }
  : T;

type Paths1064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1064<K, Paths1064<T[K], Prev1064[D]>> : never }[keyof T]
  : never;

type Prev1064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1064 {
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

type ConfigPaths1064 = Paths1064<NestedConfig1064>;

interface HeavyProps1064 {
  config: DeepPartial1064<NestedConfig1064>;
  path?: ConfigPaths1064;
}

const HeavyComponent1064 = memo(function HeavyComponent1064({ config }: HeavyProps1064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1064.displayName = 'HeavyComponent1064';
export default HeavyComponent1064;
