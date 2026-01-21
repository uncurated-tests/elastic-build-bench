'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1098<T> = T extends (infer U)[]
  ? DeepReadonlyArray1098<U>
  : T extends object
  ? DeepReadonlyObject1098<T>
  : T;

interface DeepReadonlyArray1098<T> extends ReadonlyArray<DeepReadonly1098<T>> {}

type DeepReadonlyObject1098<T> = {
  readonly [P in keyof T]: DeepReadonly1098<T[P]>;
};

type UnionToIntersection1098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1098<T> = UnionToIntersection1098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1098<T extends unknown[], V> = [...T, V];

type TuplifyUnion1098<T, L = LastOf1098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1098<TuplifyUnion1098<Exclude<T, L>>, L>;

type DeepPartial1098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1098<T[P]> }
  : T;

type Paths1098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1098<K, Paths1098<T[K], Prev1098[D]>> : never }[keyof T]
  : never;

type Prev1098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1098 {
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

type ConfigPaths1098 = Paths1098<NestedConfig1098>;

interface HeavyProps1098 {
  config: DeepPartial1098<NestedConfig1098>;
  path?: ConfigPaths1098;
}

const HeavyComponent1098 = memo(function HeavyComponent1098({ config }: HeavyProps1098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1098.displayName = 'HeavyComponent1098';
export default HeavyComponent1098;
