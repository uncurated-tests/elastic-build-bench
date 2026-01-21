'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1422<T> = T extends (infer U)[]
  ? DeepReadonlyArray1422<U>
  : T extends object
  ? DeepReadonlyObject1422<T>
  : T;

interface DeepReadonlyArray1422<T> extends ReadonlyArray<DeepReadonly1422<T>> {}

type DeepReadonlyObject1422<T> = {
  readonly [P in keyof T]: DeepReadonly1422<T[P]>;
};

type UnionToIntersection1422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1422<T> = UnionToIntersection1422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1422<T extends unknown[], V> = [...T, V];

type TuplifyUnion1422<T, L = LastOf1422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1422<TuplifyUnion1422<Exclude<T, L>>, L>;

type DeepPartial1422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1422<T[P]> }
  : T;

type Paths1422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1422<K, Paths1422<T[K], Prev1422[D]>> : never }[keyof T]
  : never;

type Prev1422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1422 {
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

type ConfigPaths1422 = Paths1422<NestedConfig1422>;

interface HeavyProps1422 {
  config: DeepPartial1422<NestedConfig1422>;
  path?: ConfigPaths1422;
}

const HeavyComponent1422 = memo(function HeavyComponent1422({ config }: HeavyProps1422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1422.displayName = 'HeavyComponent1422';
export default HeavyComponent1422;
