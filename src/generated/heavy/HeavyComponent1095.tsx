'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1095<T> = T extends (infer U)[]
  ? DeepReadonlyArray1095<U>
  : T extends object
  ? DeepReadonlyObject1095<T>
  : T;

interface DeepReadonlyArray1095<T> extends ReadonlyArray<DeepReadonly1095<T>> {}

type DeepReadonlyObject1095<T> = {
  readonly [P in keyof T]: DeepReadonly1095<T[P]>;
};

type UnionToIntersection1095<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1095<T> = UnionToIntersection1095<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1095<T extends unknown[], V> = [...T, V];

type TuplifyUnion1095<T, L = LastOf1095<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1095<TuplifyUnion1095<Exclude<T, L>>, L>;

type DeepPartial1095<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1095<T[P]> }
  : T;

type Paths1095<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1095<K, Paths1095<T[K], Prev1095[D]>> : never }[keyof T]
  : never;

type Prev1095 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1095<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1095 {
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

type ConfigPaths1095 = Paths1095<NestedConfig1095>;

interface HeavyProps1095 {
  config: DeepPartial1095<NestedConfig1095>;
  path?: ConfigPaths1095;
}

const HeavyComponent1095 = memo(function HeavyComponent1095({ config }: HeavyProps1095) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1095) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1095 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1095: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1095.displayName = 'HeavyComponent1095';
export default HeavyComponent1095;
