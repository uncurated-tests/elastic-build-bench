'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1142<T> = T extends (infer U)[]
  ? DeepReadonlyArray1142<U>
  : T extends object
  ? DeepReadonlyObject1142<T>
  : T;

interface DeepReadonlyArray1142<T> extends ReadonlyArray<DeepReadonly1142<T>> {}

type DeepReadonlyObject1142<T> = {
  readonly [P in keyof T]: DeepReadonly1142<T[P]>;
};

type UnionToIntersection1142<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1142<T> = UnionToIntersection1142<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1142<T extends unknown[], V> = [...T, V];

type TuplifyUnion1142<T, L = LastOf1142<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1142<TuplifyUnion1142<Exclude<T, L>>, L>;

type DeepPartial1142<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1142<T[P]> }
  : T;

type Paths1142<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1142<K, Paths1142<T[K], Prev1142[D]>> : never }[keyof T]
  : never;

type Prev1142 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1142<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1142 {
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

type ConfigPaths1142 = Paths1142<NestedConfig1142>;

interface HeavyProps1142 {
  config: DeepPartial1142<NestedConfig1142>;
  path?: ConfigPaths1142;
}

const HeavyComponent1142 = memo(function HeavyComponent1142({ config }: HeavyProps1142) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1142) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1142 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1142: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1142.displayName = 'HeavyComponent1142';
export default HeavyComponent1142;
