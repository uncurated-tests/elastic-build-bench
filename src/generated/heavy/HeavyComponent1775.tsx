'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1775<T> = T extends (infer U)[]
  ? DeepReadonlyArray1775<U>
  : T extends object
  ? DeepReadonlyObject1775<T>
  : T;

interface DeepReadonlyArray1775<T> extends ReadonlyArray<DeepReadonly1775<T>> {}

type DeepReadonlyObject1775<T> = {
  readonly [P in keyof T]: DeepReadonly1775<T[P]>;
};

type UnionToIntersection1775<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1775<T> = UnionToIntersection1775<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1775<T extends unknown[], V> = [...T, V];

type TuplifyUnion1775<T, L = LastOf1775<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1775<TuplifyUnion1775<Exclude<T, L>>, L>;

type DeepPartial1775<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1775<T[P]> }
  : T;

type Paths1775<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1775<K, Paths1775<T[K], Prev1775[D]>> : never }[keyof T]
  : never;

type Prev1775 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1775<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1775 {
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

type ConfigPaths1775 = Paths1775<NestedConfig1775>;

interface HeavyProps1775 {
  config: DeepPartial1775<NestedConfig1775>;
  path?: ConfigPaths1775;
}

const HeavyComponent1775 = memo(function HeavyComponent1775({ config }: HeavyProps1775) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1775) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1775 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1775: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1775.displayName = 'HeavyComponent1775';
export default HeavyComponent1775;
