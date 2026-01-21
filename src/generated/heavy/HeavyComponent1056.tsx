'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1056<T> = T extends (infer U)[]
  ? DeepReadonlyArray1056<U>
  : T extends object
  ? DeepReadonlyObject1056<T>
  : T;

interface DeepReadonlyArray1056<T> extends ReadonlyArray<DeepReadonly1056<T>> {}

type DeepReadonlyObject1056<T> = {
  readonly [P in keyof T]: DeepReadonly1056<T[P]>;
};

type UnionToIntersection1056<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1056<T> = UnionToIntersection1056<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1056<T extends unknown[], V> = [...T, V];

type TuplifyUnion1056<T, L = LastOf1056<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1056<TuplifyUnion1056<Exclude<T, L>>, L>;

type DeepPartial1056<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1056<T[P]> }
  : T;

type Paths1056<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1056<K, Paths1056<T[K], Prev1056[D]>> : never }[keyof T]
  : never;

type Prev1056 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1056<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1056 {
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

type ConfigPaths1056 = Paths1056<NestedConfig1056>;

interface HeavyProps1056 {
  config: DeepPartial1056<NestedConfig1056>;
  path?: ConfigPaths1056;
}

const HeavyComponent1056 = memo(function HeavyComponent1056({ config }: HeavyProps1056) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1056) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1056 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1056: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1056.displayName = 'HeavyComponent1056';
export default HeavyComponent1056;
