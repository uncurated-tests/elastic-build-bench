'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1341<T> = T extends (infer U)[]
  ? DeepReadonlyArray1341<U>
  : T extends object
  ? DeepReadonlyObject1341<T>
  : T;

interface DeepReadonlyArray1341<T> extends ReadonlyArray<DeepReadonly1341<T>> {}

type DeepReadonlyObject1341<T> = {
  readonly [P in keyof T]: DeepReadonly1341<T[P]>;
};

type UnionToIntersection1341<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1341<T> = UnionToIntersection1341<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1341<T extends unknown[], V> = [...T, V];

type TuplifyUnion1341<T, L = LastOf1341<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1341<TuplifyUnion1341<Exclude<T, L>>, L>;

type DeepPartial1341<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1341<T[P]> }
  : T;

type Paths1341<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1341<K, Paths1341<T[K], Prev1341[D]>> : never }[keyof T]
  : never;

type Prev1341 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1341<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1341 {
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

type ConfigPaths1341 = Paths1341<NestedConfig1341>;

interface HeavyProps1341 {
  config: DeepPartial1341<NestedConfig1341>;
  path?: ConfigPaths1341;
}

const HeavyComponent1341 = memo(function HeavyComponent1341({ config }: HeavyProps1341) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1341) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1341 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1341: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1341.displayName = 'HeavyComponent1341';
export default HeavyComponent1341;
