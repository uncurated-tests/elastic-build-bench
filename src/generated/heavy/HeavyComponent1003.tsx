'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1003<T> = T extends (infer U)[]
  ? DeepReadonlyArray1003<U>
  : T extends object
  ? DeepReadonlyObject1003<T>
  : T;

interface DeepReadonlyArray1003<T> extends ReadonlyArray<DeepReadonly1003<T>> {}

type DeepReadonlyObject1003<T> = {
  readonly [P in keyof T]: DeepReadonly1003<T[P]>;
};

type UnionToIntersection1003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1003<T> = UnionToIntersection1003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1003<T extends unknown[], V> = [...T, V];

type TuplifyUnion1003<T, L = LastOf1003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1003<TuplifyUnion1003<Exclude<T, L>>, L>;

type DeepPartial1003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1003<T[P]> }
  : T;

type Paths1003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1003<K, Paths1003<T[K], Prev1003[D]>> : never }[keyof T]
  : never;

type Prev1003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1003 {
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

type ConfigPaths1003 = Paths1003<NestedConfig1003>;

interface HeavyProps1003 {
  config: DeepPartial1003<NestedConfig1003>;
  path?: ConfigPaths1003;
}

const HeavyComponent1003 = memo(function HeavyComponent1003({ config }: HeavyProps1003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1003.displayName = 'HeavyComponent1003';
export default HeavyComponent1003;
