'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1163<T> = T extends (infer U)[]
  ? DeepReadonlyArray1163<U>
  : T extends object
  ? DeepReadonlyObject1163<T>
  : T;

interface DeepReadonlyArray1163<T> extends ReadonlyArray<DeepReadonly1163<T>> {}

type DeepReadonlyObject1163<T> = {
  readonly [P in keyof T]: DeepReadonly1163<T[P]>;
};

type UnionToIntersection1163<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1163<T> = UnionToIntersection1163<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1163<T extends unknown[], V> = [...T, V];

type TuplifyUnion1163<T, L = LastOf1163<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1163<TuplifyUnion1163<Exclude<T, L>>, L>;

type DeepPartial1163<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1163<T[P]> }
  : T;

type Paths1163<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1163<K, Paths1163<T[K], Prev1163[D]>> : never }[keyof T]
  : never;

type Prev1163 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1163<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1163 {
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

type ConfigPaths1163 = Paths1163<NestedConfig1163>;

interface HeavyProps1163 {
  config: DeepPartial1163<NestedConfig1163>;
  path?: ConfigPaths1163;
}

const HeavyComponent1163 = memo(function HeavyComponent1163({ config }: HeavyProps1163) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1163) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1163 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1163: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1163.displayName = 'HeavyComponent1163';
export default HeavyComponent1163;
