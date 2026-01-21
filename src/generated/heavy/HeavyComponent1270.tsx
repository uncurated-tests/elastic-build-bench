'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1270<T> = T extends (infer U)[]
  ? DeepReadonlyArray1270<U>
  : T extends object
  ? DeepReadonlyObject1270<T>
  : T;

interface DeepReadonlyArray1270<T> extends ReadonlyArray<DeepReadonly1270<T>> {}

type DeepReadonlyObject1270<T> = {
  readonly [P in keyof T]: DeepReadonly1270<T[P]>;
};

type UnionToIntersection1270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1270<T> = UnionToIntersection1270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1270<T extends unknown[], V> = [...T, V];

type TuplifyUnion1270<T, L = LastOf1270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1270<TuplifyUnion1270<Exclude<T, L>>, L>;

type DeepPartial1270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1270<T[P]> }
  : T;

type Paths1270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1270<K, Paths1270<T[K], Prev1270[D]>> : never }[keyof T]
  : never;

type Prev1270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1270 {
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

type ConfigPaths1270 = Paths1270<NestedConfig1270>;

interface HeavyProps1270 {
  config: DeepPartial1270<NestedConfig1270>;
  path?: ConfigPaths1270;
}

const HeavyComponent1270 = memo(function HeavyComponent1270({ config }: HeavyProps1270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1270.displayName = 'HeavyComponent1270';
export default HeavyComponent1270;
