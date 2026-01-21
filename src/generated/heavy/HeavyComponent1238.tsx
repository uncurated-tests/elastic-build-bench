'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1238<T> = T extends (infer U)[]
  ? DeepReadonlyArray1238<U>
  : T extends object
  ? DeepReadonlyObject1238<T>
  : T;

interface DeepReadonlyArray1238<T> extends ReadonlyArray<DeepReadonly1238<T>> {}

type DeepReadonlyObject1238<T> = {
  readonly [P in keyof T]: DeepReadonly1238<T[P]>;
};

type UnionToIntersection1238<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1238<T> = UnionToIntersection1238<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1238<T extends unknown[], V> = [...T, V];

type TuplifyUnion1238<T, L = LastOf1238<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1238<TuplifyUnion1238<Exclude<T, L>>, L>;

type DeepPartial1238<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1238<T[P]> }
  : T;

type Paths1238<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1238<K, Paths1238<T[K], Prev1238[D]>> : never }[keyof T]
  : never;

type Prev1238 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1238<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1238 {
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

type ConfigPaths1238 = Paths1238<NestedConfig1238>;

interface HeavyProps1238 {
  config: DeepPartial1238<NestedConfig1238>;
  path?: ConfigPaths1238;
}

const HeavyComponent1238 = memo(function HeavyComponent1238({ config }: HeavyProps1238) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1238) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1238 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1238: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1238.displayName = 'HeavyComponent1238';
export default HeavyComponent1238;
