'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1661<T> = T extends (infer U)[]
  ? DeepReadonlyArray1661<U>
  : T extends object
  ? DeepReadonlyObject1661<T>
  : T;

interface DeepReadonlyArray1661<T> extends ReadonlyArray<DeepReadonly1661<T>> {}

type DeepReadonlyObject1661<T> = {
  readonly [P in keyof T]: DeepReadonly1661<T[P]>;
};

type UnionToIntersection1661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1661<T> = UnionToIntersection1661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1661<T extends unknown[], V> = [...T, V];

type TuplifyUnion1661<T, L = LastOf1661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1661<TuplifyUnion1661<Exclude<T, L>>, L>;

type DeepPartial1661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1661<T[P]> }
  : T;

type Paths1661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1661<K, Paths1661<T[K], Prev1661[D]>> : never }[keyof T]
  : never;

type Prev1661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1661 {
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

type ConfigPaths1661 = Paths1661<NestedConfig1661>;

interface HeavyProps1661 {
  config: DeepPartial1661<NestedConfig1661>;
  path?: ConfigPaths1661;
}

const HeavyComponent1661 = memo(function HeavyComponent1661({ config }: HeavyProps1661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1661.displayName = 'HeavyComponent1661';
export default HeavyComponent1661;
