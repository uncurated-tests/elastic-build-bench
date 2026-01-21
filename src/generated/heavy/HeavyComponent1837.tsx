'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1837<T> = T extends (infer U)[]
  ? DeepReadonlyArray1837<U>
  : T extends object
  ? DeepReadonlyObject1837<T>
  : T;

interface DeepReadonlyArray1837<T> extends ReadonlyArray<DeepReadonly1837<T>> {}

type DeepReadonlyObject1837<T> = {
  readonly [P in keyof T]: DeepReadonly1837<T[P]>;
};

type UnionToIntersection1837<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1837<T> = UnionToIntersection1837<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1837<T extends unknown[], V> = [...T, V];

type TuplifyUnion1837<T, L = LastOf1837<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1837<TuplifyUnion1837<Exclude<T, L>>, L>;

type DeepPartial1837<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1837<T[P]> }
  : T;

type Paths1837<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1837<K, Paths1837<T[K], Prev1837[D]>> : never }[keyof T]
  : never;

type Prev1837 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1837<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1837 {
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

type ConfigPaths1837 = Paths1837<NestedConfig1837>;

interface HeavyProps1837 {
  config: DeepPartial1837<NestedConfig1837>;
  path?: ConfigPaths1837;
}

const HeavyComponent1837 = memo(function HeavyComponent1837({ config }: HeavyProps1837) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1837) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1837 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1837: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1837.displayName = 'HeavyComponent1837';
export default HeavyComponent1837;
