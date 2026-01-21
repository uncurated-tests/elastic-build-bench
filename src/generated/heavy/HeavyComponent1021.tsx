'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1021<T> = T extends (infer U)[]
  ? DeepReadonlyArray1021<U>
  : T extends object
  ? DeepReadonlyObject1021<T>
  : T;

interface DeepReadonlyArray1021<T> extends ReadonlyArray<DeepReadonly1021<T>> {}

type DeepReadonlyObject1021<T> = {
  readonly [P in keyof T]: DeepReadonly1021<T[P]>;
};

type UnionToIntersection1021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1021<T> = UnionToIntersection1021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1021<T extends unknown[], V> = [...T, V];

type TuplifyUnion1021<T, L = LastOf1021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1021<TuplifyUnion1021<Exclude<T, L>>, L>;

type DeepPartial1021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1021<T[P]> }
  : T;

type Paths1021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1021<K, Paths1021<T[K], Prev1021[D]>> : never }[keyof T]
  : never;

type Prev1021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1021 {
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

type ConfigPaths1021 = Paths1021<NestedConfig1021>;

interface HeavyProps1021 {
  config: DeepPartial1021<NestedConfig1021>;
  path?: ConfigPaths1021;
}

const HeavyComponent1021 = memo(function HeavyComponent1021({ config }: HeavyProps1021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1021.displayName = 'HeavyComponent1021';
export default HeavyComponent1021;
