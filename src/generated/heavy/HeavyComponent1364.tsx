'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1364<T> = T extends (infer U)[]
  ? DeepReadonlyArray1364<U>
  : T extends object
  ? DeepReadonlyObject1364<T>
  : T;

interface DeepReadonlyArray1364<T> extends ReadonlyArray<DeepReadonly1364<T>> {}

type DeepReadonlyObject1364<T> = {
  readonly [P in keyof T]: DeepReadonly1364<T[P]>;
};

type UnionToIntersection1364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1364<T> = UnionToIntersection1364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1364<T extends unknown[], V> = [...T, V];

type TuplifyUnion1364<T, L = LastOf1364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1364<TuplifyUnion1364<Exclude<T, L>>, L>;

type DeepPartial1364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1364<T[P]> }
  : T;

type Paths1364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1364<K, Paths1364<T[K], Prev1364[D]>> : never }[keyof T]
  : never;

type Prev1364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1364 {
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

type ConfigPaths1364 = Paths1364<NestedConfig1364>;

interface HeavyProps1364 {
  config: DeepPartial1364<NestedConfig1364>;
  path?: ConfigPaths1364;
}

const HeavyComponent1364 = memo(function HeavyComponent1364({ config }: HeavyProps1364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1364.displayName = 'HeavyComponent1364';
export default HeavyComponent1364;
