'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1339<T> = T extends (infer U)[]
  ? DeepReadonlyArray1339<U>
  : T extends object
  ? DeepReadonlyObject1339<T>
  : T;

interface DeepReadonlyArray1339<T> extends ReadonlyArray<DeepReadonly1339<T>> {}

type DeepReadonlyObject1339<T> = {
  readonly [P in keyof T]: DeepReadonly1339<T[P]>;
};

type UnionToIntersection1339<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1339<T> = UnionToIntersection1339<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1339<T extends unknown[], V> = [...T, V];

type TuplifyUnion1339<T, L = LastOf1339<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1339<TuplifyUnion1339<Exclude<T, L>>, L>;

type DeepPartial1339<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1339<T[P]> }
  : T;

type Paths1339<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1339<K, Paths1339<T[K], Prev1339[D]>> : never }[keyof T]
  : never;

type Prev1339 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1339<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1339 {
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

type ConfigPaths1339 = Paths1339<NestedConfig1339>;

interface HeavyProps1339 {
  config: DeepPartial1339<NestedConfig1339>;
  path?: ConfigPaths1339;
}

const HeavyComponent1339 = memo(function HeavyComponent1339({ config }: HeavyProps1339) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1339) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1339 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1339: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1339.displayName = 'HeavyComponent1339';
export default HeavyComponent1339;
