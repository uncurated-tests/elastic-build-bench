'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1301<T> = T extends (infer U)[]
  ? DeepReadonlyArray1301<U>
  : T extends object
  ? DeepReadonlyObject1301<T>
  : T;

interface DeepReadonlyArray1301<T> extends ReadonlyArray<DeepReadonly1301<T>> {}

type DeepReadonlyObject1301<T> = {
  readonly [P in keyof T]: DeepReadonly1301<T[P]>;
};

type UnionToIntersection1301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1301<T> = UnionToIntersection1301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1301<T extends unknown[], V> = [...T, V];

type TuplifyUnion1301<T, L = LastOf1301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1301<TuplifyUnion1301<Exclude<T, L>>, L>;

type DeepPartial1301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1301<T[P]> }
  : T;

type Paths1301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1301<K, Paths1301<T[K], Prev1301[D]>> : never }[keyof T]
  : never;

type Prev1301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1301 {
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

type ConfigPaths1301 = Paths1301<NestedConfig1301>;

interface HeavyProps1301 {
  config: DeepPartial1301<NestedConfig1301>;
  path?: ConfigPaths1301;
}

const HeavyComponent1301 = memo(function HeavyComponent1301({ config }: HeavyProps1301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1301.displayName = 'HeavyComponent1301';
export default HeavyComponent1301;
