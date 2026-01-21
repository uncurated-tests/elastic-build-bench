'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1261<T> = T extends (infer U)[]
  ? DeepReadonlyArray1261<U>
  : T extends object
  ? DeepReadonlyObject1261<T>
  : T;

interface DeepReadonlyArray1261<T> extends ReadonlyArray<DeepReadonly1261<T>> {}

type DeepReadonlyObject1261<T> = {
  readonly [P in keyof T]: DeepReadonly1261<T[P]>;
};

type UnionToIntersection1261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1261<T> = UnionToIntersection1261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1261<T extends unknown[], V> = [...T, V];

type TuplifyUnion1261<T, L = LastOf1261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1261<TuplifyUnion1261<Exclude<T, L>>, L>;

type DeepPartial1261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1261<T[P]> }
  : T;

type Paths1261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1261<K, Paths1261<T[K], Prev1261[D]>> : never }[keyof T]
  : never;

type Prev1261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1261 {
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

type ConfigPaths1261 = Paths1261<NestedConfig1261>;

interface HeavyProps1261 {
  config: DeepPartial1261<NestedConfig1261>;
  path?: ConfigPaths1261;
}

const HeavyComponent1261 = memo(function HeavyComponent1261({ config }: HeavyProps1261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1261.displayName = 'HeavyComponent1261';
export default HeavyComponent1261;
