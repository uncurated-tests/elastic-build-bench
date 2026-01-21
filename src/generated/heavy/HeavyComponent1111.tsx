'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1111<T> = T extends (infer U)[]
  ? DeepReadonlyArray1111<U>
  : T extends object
  ? DeepReadonlyObject1111<T>
  : T;

interface DeepReadonlyArray1111<T> extends ReadonlyArray<DeepReadonly1111<T>> {}

type DeepReadonlyObject1111<T> = {
  readonly [P in keyof T]: DeepReadonly1111<T[P]>;
};

type UnionToIntersection1111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1111<T> = UnionToIntersection1111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1111<T extends unknown[], V> = [...T, V];

type TuplifyUnion1111<T, L = LastOf1111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1111<TuplifyUnion1111<Exclude<T, L>>, L>;

type DeepPartial1111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1111<T[P]> }
  : T;

type Paths1111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1111<K, Paths1111<T[K], Prev1111[D]>> : never }[keyof T]
  : never;

type Prev1111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1111 {
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

type ConfigPaths1111 = Paths1111<NestedConfig1111>;

interface HeavyProps1111 {
  config: DeepPartial1111<NestedConfig1111>;
  path?: ConfigPaths1111;
}

const HeavyComponent1111 = memo(function HeavyComponent1111({ config }: HeavyProps1111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1111.displayName = 'HeavyComponent1111';
export default HeavyComponent1111;
