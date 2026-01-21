'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1463<T> = T extends (infer U)[]
  ? DeepReadonlyArray1463<U>
  : T extends object
  ? DeepReadonlyObject1463<T>
  : T;

interface DeepReadonlyArray1463<T> extends ReadonlyArray<DeepReadonly1463<T>> {}

type DeepReadonlyObject1463<T> = {
  readonly [P in keyof T]: DeepReadonly1463<T[P]>;
};

type UnionToIntersection1463<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1463<T> = UnionToIntersection1463<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1463<T extends unknown[], V> = [...T, V];

type TuplifyUnion1463<T, L = LastOf1463<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1463<TuplifyUnion1463<Exclude<T, L>>, L>;

type DeepPartial1463<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1463<T[P]> }
  : T;

type Paths1463<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1463<K, Paths1463<T[K], Prev1463[D]>> : never }[keyof T]
  : never;

type Prev1463 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1463<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1463 {
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

type ConfigPaths1463 = Paths1463<NestedConfig1463>;

interface HeavyProps1463 {
  config: DeepPartial1463<NestedConfig1463>;
  path?: ConfigPaths1463;
}

const HeavyComponent1463 = memo(function HeavyComponent1463({ config }: HeavyProps1463) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1463) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1463 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1463: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1463.displayName = 'HeavyComponent1463';
export default HeavyComponent1463;
