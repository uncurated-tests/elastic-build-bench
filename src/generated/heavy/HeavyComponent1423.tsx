'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1423<T> = T extends (infer U)[]
  ? DeepReadonlyArray1423<U>
  : T extends object
  ? DeepReadonlyObject1423<T>
  : T;

interface DeepReadonlyArray1423<T> extends ReadonlyArray<DeepReadonly1423<T>> {}

type DeepReadonlyObject1423<T> = {
  readonly [P in keyof T]: DeepReadonly1423<T[P]>;
};

type UnionToIntersection1423<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1423<T> = UnionToIntersection1423<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1423<T extends unknown[], V> = [...T, V];

type TuplifyUnion1423<T, L = LastOf1423<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1423<TuplifyUnion1423<Exclude<T, L>>, L>;

type DeepPartial1423<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1423<T[P]> }
  : T;

type Paths1423<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1423<K, Paths1423<T[K], Prev1423[D]>> : never }[keyof T]
  : never;

type Prev1423 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1423<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1423 {
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

type ConfigPaths1423 = Paths1423<NestedConfig1423>;

interface HeavyProps1423 {
  config: DeepPartial1423<NestedConfig1423>;
  path?: ConfigPaths1423;
}

const HeavyComponent1423 = memo(function HeavyComponent1423({ config }: HeavyProps1423) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1423) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1423 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1423: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1423.displayName = 'HeavyComponent1423';
export default HeavyComponent1423;
