'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1253<T> = T extends (infer U)[]
  ? DeepReadonlyArray1253<U>
  : T extends object
  ? DeepReadonlyObject1253<T>
  : T;

interface DeepReadonlyArray1253<T> extends ReadonlyArray<DeepReadonly1253<T>> {}

type DeepReadonlyObject1253<T> = {
  readonly [P in keyof T]: DeepReadonly1253<T[P]>;
};

type UnionToIntersection1253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1253<T> = UnionToIntersection1253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1253<T extends unknown[], V> = [...T, V];

type TuplifyUnion1253<T, L = LastOf1253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1253<TuplifyUnion1253<Exclude<T, L>>, L>;

type DeepPartial1253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1253<T[P]> }
  : T;

type Paths1253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1253<K, Paths1253<T[K], Prev1253[D]>> : never }[keyof T]
  : never;

type Prev1253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1253 {
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

type ConfigPaths1253 = Paths1253<NestedConfig1253>;

interface HeavyProps1253 {
  config: DeepPartial1253<NestedConfig1253>;
  path?: ConfigPaths1253;
}

const HeavyComponent1253 = memo(function HeavyComponent1253({ config }: HeavyProps1253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1253.displayName = 'HeavyComponent1253';
export default HeavyComponent1253;
