'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1011<T> = T extends (infer U)[]
  ? DeepReadonlyArray1011<U>
  : T extends object
  ? DeepReadonlyObject1011<T>
  : T;

interface DeepReadonlyArray1011<T> extends ReadonlyArray<DeepReadonly1011<T>> {}

type DeepReadonlyObject1011<T> = {
  readonly [P in keyof T]: DeepReadonly1011<T[P]>;
};

type UnionToIntersection1011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1011<T> = UnionToIntersection1011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1011<T extends unknown[], V> = [...T, V];

type TuplifyUnion1011<T, L = LastOf1011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1011<TuplifyUnion1011<Exclude<T, L>>, L>;

type DeepPartial1011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1011<T[P]> }
  : T;

type Paths1011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1011<K, Paths1011<T[K], Prev1011[D]>> : never }[keyof T]
  : never;

type Prev1011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1011 {
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

type ConfigPaths1011 = Paths1011<NestedConfig1011>;

interface HeavyProps1011 {
  config: DeepPartial1011<NestedConfig1011>;
  path?: ConfigPaths1011;
}

const HeavyComponent1011 = memo(function HeavyComponent1011({ config }: HeavyProps1011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1011.displayName = 'HeavyComponent1011';
export default HeavyComponent1011;
