'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1747<T> = T extends (infer U)[]
  ? DeepReadonlyArray1747<U>
  : T extends object
  ? DeepReadonlyObject1747<T>
  : T;

interface DeepReadonlyArray1747<T> extends ReadonlyArray<DeepReadonly1747<T>> {}

type DeepReadonlyObject1747<T> = {
  readonly [P in keyof T]: DeepReadonly1747<T[P]>;
};

type UnionToIntersection1747<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1747<T> = UnionToIntersection1747<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1747<T extends unknown[], V> = [...T, V];

type TuplifyUnion1747<T, L = LastOf1747<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1747<TuplifyUnion1747<Exclude<T, L>>, L>;

type DeepPartial1747<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1747<T[P]> }
  : T;

type Paths1747<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1747<K, Paths1747<T[K], Prev1747[D]>> : never }[keyof T]
  : never;

type Prev1747 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1747<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1747 {
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

type ConfigPaths1747 = Paths1747<NestedConfig1747>;

interface HeavyProps1747 {
  config: DeepPartial1747<NestedConfig1747>;
  path?: ConfigPaths1747;
}

const HeavyComponent1747 = memo(function HeavyComponent1747({ config }: HeavyProps1747) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1747) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1747 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1747: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1747.displayName = 'HeavyComponent1747';
export default HeavyComponent1747;
