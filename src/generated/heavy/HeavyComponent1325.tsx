'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1325<T> = T extends (infer U)[]
  ? DeepReadonlyArray1325<U>
  : T extends object
  ? DeepReadonlyObject1325<T>
  : T;

interface DeepReadonlyArray1325<T> extends ReadonlyArray<DeepReadonly1325<T>> {}

type DeepReadonlyObject1325<T> = {
  readonly [P in keyof T]: DeepReadonly1325<T[P]>;
};

type UnionToIntersection1325<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1325<T> = UnionToIntersection1325<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1325<T extends unknown[], V> = [...T, V];

type TuplifyUnion1325<T, L = LastOf1325<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1325<TuplifyUnion1325<Exclude<T, L>>, L>;

type DeepPartial1325<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1325<T[P]> }
  : T;

type Paths1325<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1325<K, Paths1325<T[K], Prev1325[D]>> : never }[keyof T]
  : never;

type Prev1325 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1325<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1325 {
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

type ConfigPaths1325 = Paths1325<NestedConfig1325>;

interface HeavyProps1325 {
  config: DeepPartial1325<NestedConfig1325>;
  path?: ConfigPaths1325;
}

const HeavyComponent1325 = memo(function HeavyComponent1325({ config }: HeavyProps1325) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1325) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1325 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1325: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1325.displayName = 'HeavyComponent1325';
export default HeavyComponent1325;
