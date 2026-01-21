'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1751<T> = T extends (infer U)[]
  ? DeepReadonlyArray1751<U>
  : T extends object
  ? DeepReadonlyObject1751<T>
  : T;

interface DeepReadonlyArray1751<T> extends ReadonlyArray<DeepReadonly1751<T>> {}

type DeepReadonlyObject1751<T> = {
  readonly [P in keyof T]: DeepReadonly1751<T[P]>;
};

type UnionToIntersection1751<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1751<T> = UnionToIntersection1751<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1751<T extends unknown[], V> = [...T, V];

type TuplifyUnion1751<T, L = LastOf1751<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1751<TuplifyUnion1751<Exclude<T, L>>, L>;

type DeepPartial1751<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1751<T[P]> }
  : T;

type Paths1751<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1751<K, Paths1751<T[K], Prev1751[D]>> : never }[keyof T]
  : never;

type Prev1751 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1751<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1751 {
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

type ConfigPaths1751 = Paths1751<NestedConfig1751>;

interface HeavyProps1751 {
  config: DeepPartial1751<NestedConfig1751>;
  path?: ConfigPaths1751;
}

const HeavyComponent1751 = memo(function HeavyComponent1751({ config }: HeavyProps1751) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1751) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1751 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1751: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1751.displayName = 'HeavyComponent1751';
export default HeavyComponent1751;
