'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1316<T> = T extends (infer U)[]
  ? DeepReadonlyArray1316<U>
  : T extends object
  ? DeepReadonlyObject1316<T>
  : T;

interface DeepReadonlyArray1316<T> extends ReadonlyArray<DeepReadonly1316<T>> {}

type DeepReadonlyObject1316<T> = {
  readonly [P in keyof T]: DeepReadonly1316<T[P]>;
};

type UnionToIntersection1316<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1316<T> = UnionToIntersection1316<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1316<T extends unknown[], V> = [...T, V];

type TuplifyUnion1316<T, L = LastOf1316<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1316<TuplifyUnion1316<Exclude<T, L>>, L>;

type DeepPartial1316<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1316<T[P]> }
  : T;

type Paths1316<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1316<K, Paths1316<T[K], Prev1316[D]>> : never }[keyof T]
  : never;

type Prev1316 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1316<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1316 {
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

type ConfigPaths1316 = Paths1316<NestedConfig1316>;

interface HeavyProps1316 {
  config: DeepPartial1316<NestedConfig1316>;
  path?: ConfigPaths1316;
}

const HeavyComponent1316 = memo(function HeavyComponent1316({ config }: HeavyProps1316) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1316) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1316 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1316: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1316.displayName = 'HeavyComponent1316';
export default HeavyComponent1316;
