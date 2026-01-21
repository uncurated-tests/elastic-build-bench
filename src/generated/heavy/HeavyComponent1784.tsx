'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1784<T> = T extends (infer U)[]
  ? DeepReadonlyArray1784<U>
  : T extends object
  ? DeepReadonlyObject1784<T>
  : T;

interface DeepReadonlyArray1784<T> extends ReadonlyArray<DeepReadonly1784<T>> {}

type DeepReadonlyObject1784<T> = {
  readonly [P in keyof T]: DeepReadonly1784<T[P]>;
};

type UnionToIntersection1784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1784<T> = UnionToIntersection1784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1784<T extends unknown[], V> = [...T, V];

type TuplifyUnion1784<T, L = LastOf1784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1784<TuplifyUnion1784<Exclude<T, L>>, L>;

type DeepPartial1784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1784<T[P]> }
  : T;

type Paths1784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1784<K, Paths1784<T[K], Prev1784[D]>> : never }[keyof T]
  : never;

type Prev1784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1784 {
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

type ConfigPaths1784 = Paths1784<NestedConfig1784>;

interface HeavyProps1784 {
  config: DeepPartial1784<NestedConfig1784>;
  path?: ConfigPaths1784;
}

const HeavyComponent1784 = memo(function HeavyComponent1784({ config }: HeavyProps1784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1784.displayName = 'HeavyComponent1784';
export default HeavyComponent1784;
