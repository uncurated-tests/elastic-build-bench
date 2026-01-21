'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1326<T> = T extends (infer U)[]
  ? DeepReadonlyArray1326<U>
  : T extends object
  ? DeepReadonlyObject1326<T>
  : T;

interface DeepReadonlyArray1326<T> extends ReadonlyArray<DeepReadonly1326<T>> {}

type DeepReadonlyObject1326<T> = {
  readonly [P in keyof T]: DeepReadonly1326<T[P]>;
};

type UnionToIntersection1326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1326<T> = UnionToIntersection1326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1326<T extends unknown[], V> = [...T, V];

type TuplifyUnion1326<T, L = LastOf1326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1326<TuplifyUnion1326<Exclude<T, L>>, L>;

type DeepPartial1326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1326<T[P]> }
  : T;

type Paths1326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1326<K, Paths1326<T[K], Prev1326[D]>> : never }[keyof T]
  : never;

type Prev1326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1326 {
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

type ConfigPaths1326 = Paths1326<NestedConfig1326>;

interface HeavyProps1326 {
  config: DeepPartial1326<NestedConfig1326>;
  path?: ConfigPaths1326;
}

const HeavyComponent1326 = memo(function HeavyComponent1326({ config }: HeavyProps1326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1326.displayName = 'HeavyComponent1326';
export default HeavyComponent1326;
