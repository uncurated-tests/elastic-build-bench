'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1374<T> = T extends (infer U)[]
  ? DeepReadonlyArray1374<U>
  : T extends object
  ? DeepReadonlyObject1374<T>
  : T;

interface DeepReadonlyArray1374<T> extends ReadonlyArray<DeepReadonly1374<T>> {}

type DeepReadonlyObject1374<T> = {
  readonly [P in keyof T]: DeepReadonly1374<T[P]>;
};

type UnionToIntersection1374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1374<T> = UnionToIntersection1374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1374<T extends unknown[], V> = [...T, V];

type TuplifyUnion1374<T, L = LastOf1374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1374<TuplifyUnion1374<Exclude<T, L>>, L>;

type DeepPartial1374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1374<T[P]> }
  : T;

type Paths1374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1374<K, Paths1374<T[K], Prev1374[D]>> : never }[keyof T]
  : never;

type Prev1374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1374 {
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

type ConfigPaths1374 = Paths1374<NestedConfig1374>;

interface HeavyProps1374 {
  config: DeepPartial1374<NestedConfig1374>;
  path?: ConfigPaths1374;
}

const HeavyComponent1374 = memo(function HeavyComponent1374({ config }: HeavyProps1374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1374.displayName = 'HeavyComponent1374';
export default HeavyComponent1374;
