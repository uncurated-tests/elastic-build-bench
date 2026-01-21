'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1781<T> = T extends (infer U)[]
  ? DeepReadonlyArray1781<U>
  : T extends object
  ? DeepReadonlyObject1781<T>
  : T;

interface DeepReadonlyArray1781<T> extends ReadonlyArray<DeepReadonly1781<T>> {}

type DeepReadonlyObject1781<T> = {
  readonly [P in keyof T]: DeepReadonly1781<T[P]>;
};

type UnionToIntersection1781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1781<T> = UnionToIntersection1781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1781<T extends unknown[], V> = [...T, V];

type TuplifyUnion1781<T, L = LastOf1781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1781<TuplifyUnion1781<Exclude<T, L>>, L>;

type DeepPartial1781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1781<T[P]> }
  : T;

type Paths1781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1781<K, Paths1781<T[K], Prev1781[D]>> : never }[keyof T]
  : never;

type Prev1781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1781 {
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

type ConfigPaths1781 = Paths1781<NestedConfig1781>;

interface HeavyProps1781 {
  config: DeepPartial1781<NestedConfig1781>;
  path?: ConfigPaths1781;
}

const HeavyComponent1781 = memo(function HeavyComponent1781({ config }: HeavyProps1781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1781.displayName = 'HeavyComponent1781';
export default HeavyComponent1781;
