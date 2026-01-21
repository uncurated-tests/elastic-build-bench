'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1436<T> = T extends (infer U)[]
  ? DeepReadonlyArray1436<U>
  : T extends object
  ? DeepReadonlyObject1436<T>
  : T;

interface DeepReadonlyArray1436<T> extends ReadonlyArray<DeepReadonly1436<T>> {}

type DeepReadonlyObject1436<T> = {
  readonly [P in keyof T]: DeepReadonly1436<T[P]>;
};

type UnionToIntersection1436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1436<T> = UnionToIntersection1436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1436<T extends unknown[], V> = [...T, V];

type TuplifyUnion1436<T, L = LastOf1436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1436<TuplifyUnion1436<Exclude<T, L>>, L>;

type DeepPartial1436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1436<T[P]> }
  : T;

type Paths1436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1436<K, Paths1436<T[K], Prev1436[D]>> : never }[keyof T]
  : never;

type Prev1436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1436 {
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

type ConfigPaths1436 = Paths1436<NestedConfig1436>;

interface HeavyProps1436 {
  config: DeepPartial1436<NestedConfig1436>;
  path?: ConfigPaths1436;
}

const HeavyComponent1436 = memo(function HeavyComponent1436({ config }: HeavyProps1436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1436.displayName = 'HeavyComponent1436';
export default HeavyComponent1436;
