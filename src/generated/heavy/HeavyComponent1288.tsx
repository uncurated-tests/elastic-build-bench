'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1288<T> = T extends (infer U)[]
  ? DeepReadonlyArray1288<U>
  : T extends object
  ? DeepReadonlyObject1288<T>
  : T;

interface DeepReadonlyArray1288<T> extends ReadonlyArray<DeepReadonly1288<T>> {}

type DeepReadonlyObject1288<T> = {
  readonly [P in keyof T]: DeepReadonly1288<T[P]>;
};

type UnionToIntersection1288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1288<T> = UnionToIntersection1288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1288<T extends unknown[], V> = [...T, V];

type TuplifyUnion1288<T, L = LastOf1288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1288<TuplifyUnion1288<Exclude<T, L>>, L>;

type DeepPartial1288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1288<T[P]> }
  : T;

type Paths1288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1288<K, Paths1288<T[K], Prev1288[D]>> : never }[keyof T]
  : never;

type Prev1288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1288 {
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

type ConfigPaths1288 = Paths1288<NestedConfig1288>;

interface HeavyProps1288 {
  config: DeepPartial1288<NestedConfig1288>;
  path?: ConfigPaths1288;
}

const HeavyComponent1288 = memo(function HeavyComponent1288({ config }: HeavyProps1288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1288.displayName = 'HeavyComponent1288';
export default HeavyComponent1288;
