'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1017<T> = T extends (infer U)[]
  ? DeepReadonlyArray1017<U>
  : T extends object
  ? DeepReadonlyObject1017<T>
  : T;

interface DeepReadonlyArray1017<T> extends ReadonlyArray<DeepReadonly1017<T>> {}

type DeepReadonlyObject1017<T> = {
  readonly [P in keyof T]: DeepReadonly1017<T[P]>;
};

type UnionToIntersection1017<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1017<T> = UnionToIntersection1017<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1017<T extends unknown[], V> = [...T, V];

type TuplifyUnion1017<T, L = LastOf1017<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1017<TuplifyUnion1017<Exclude<T, L>>, L>;

type DeepPartial1017<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1017<T[P]> }
  : T;

type Paths1017<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1017<K, Paths1017<T[K], Prev1017[D]>> : never }[keyof T]
  : never;

type Prev1017 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1017<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1017 {
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

type ConfigPaths1017 = Paths1017<NestedConfig1017>;

interface HeavyProps1017 {
  config: DeepPartial1017<NestedConfig1017>;
  path?: ConfigPaths1017;
}

const HeavyComponent1017 = memo(function HeavyComponent1017({ config }: HeavyProps1017) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1017) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1017 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1017: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1017.displayName = 'HeavyComponent1017';
export default HeavyComponent1017;
