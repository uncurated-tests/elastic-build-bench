'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1213<T> = T extends (infer U)[]
  ? DeepReadonlyArray1213<U>
  : T extends object
  ? DeepReadonlyObject1213<T>
  : T;

interface DeepReadonlyArray1213<T> extends ReadonlyArray<DeepReadonly1213<T>> {}

type DeepReadonlyObject1213<T> = {
  readonly [P in keyof T]: DeepReadonly1213<T[P]>;
};

type UnionToIntersection1213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1213<T> = UnionToIntersection1213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1213<T extends unknown[], V> = [...T, V];

type TuplifyUnion1213<T, L = LastOf1213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1213<TuplifyUnion1213<Exclude<T, L>>, L>;

type DeepPartial1213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1213<T[P]> }
  : T;

type Paths1213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1213<K, Paths1213<T[K], Prev1213[D]>> : never }[keyof T]
  : never;

type Prev1213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1213 {
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

type ConfigPaths1213 = Paths1213<NestedConfig1213>;

interface HeavyProps1213 {
  config: DeepPartial1213<NestedConfig1213>;
  path?: ConfigPaths1213;
}

const HeavyComponent1213 = memo(function HeavyComponent1213({ config }: HeavyProps1213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1213.displayName = 'HeavyComponent1213';
export default HeavyComponent1213;
