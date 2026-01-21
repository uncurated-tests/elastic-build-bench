'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1014<T> = T extends (infer U)[]
  ? DeepReadonlyArray1014<U>
  : T extends object
  ? DeepReadonlyObject1014<T>
  : T;

interface DeepReadonlyArray1014<T> extends ReadonlyArray<DeepReadonly1014<T>> {}

type DeepReadonlyObject1014<T> = {
  readonly [P in keyof T]: DeepReadonly1014<T[P]>;
};

type UnionToIntersection1014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1014<T> = UnionToIntersection1014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1014<T extends unknown[], V> = [...T, V];

type TuplifyUnion1014<T, L = LastOf1014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1014<TuplifyUnion1014<Exclude<T, L>>, L>;

type DeepPartial1014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1014<T[P]> }
  : T;

type Paths1014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1014<K, Paths1014<T[K], Prev1014[D]>> : never }[keyof T]
  : never;

type Prev1014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1014 {
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

type ConfigPaths1014 = Paths1014<NestedConfig1014>;

interface HeavyProps1014 {
  config: DeepPartial1014<NestedConfig1014>;
  path?: ConfigPaths1014;
}

const HeavyComponent1014 = memo(function HeavyComponent1014({ config }: HeavyProps1014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1014.displayName = 'HeavyComponent1014';
export default HeavyComponent1014;
