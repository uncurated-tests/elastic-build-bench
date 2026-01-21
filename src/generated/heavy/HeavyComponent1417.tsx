'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1417<T> = T extends (infer U)[]
  ? DeepReadonlyArray1417<U>
  : T extends object
  ? DeepReadonlyObject1417<T>
  : T;

interface DeepReadonlyArray1417<T> extends ReadonlyArray<DeepReadonly1417<T>> {}

type DeepReadonlyObject1417<T> = {
  readonly [P in keyof T]: DeepReadonly1417<T[P]>;
};

type UnionToIntersection1417<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1417<T> = UnionToIntersection1417<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1417<T extends unknown[], V> = [...T, V];

type TuplifyUnion1417<T, L = LastOf1417<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1417<TuplifyUnion1417<Exclude<T, L>>, L>;

type DeepPartial1417<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1417<T[P]> }
  : T;

type Paths1417<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1417<K, Paths1417<T[K], Prev1417[D]>> : never }[keyof T]
  : never;

type Prev1417 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1417<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1417 {
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

type ConfigPaths1417 = Paths1417<NestedConfig1417>;

interface HeavyProps1417 {
  config: DeepPartial1417<NestedConfig1417>;
  path?: ConfigPaths1417;
}

const HeavyComponent1417 = memo(function HeavyComponent1417({ config }: HeavyProps1417) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1417) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1417 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1417: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1417.displayName = 'HeavyComponent1417';
export default HeavyComponent1417;
