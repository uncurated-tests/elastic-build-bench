'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1577<T> = T extends (infer U)[]
  ? DeepReadonlyArray1577<U>
  : T extends object
  ? DeepReadonlyObject1577<T>
  : T;

interface DeepReadonlyArray1577<T> extends ReadonlyArray<DeepReadonly1577<T>> {}

type DeepReadonlyObject1577<T> = {
  readonly [P in keyof T]: DeepReadonly1577<T[P]>;
};

type UnionToIntersection1577<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1577<T> = UnionToIntersection1577<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1577<T extends unknown[], V> = [...T, V];

type TuplifyUnion1577<T, L = LastOf1577<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1577<TuplifyUnion1577<Exclude<T, L>>, L>;

type DeepPartial1577<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1577<T[P]> }
  : T;

type Paths1577<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1577<K, Paths1577<T[K], Prev1577[D]>> : never }[keyof T]
  : never;

type Prev1577 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1577<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1577 {
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

type ConfigPaths1577 = Paths1577<NestedConfig1577>;

interface HeavyProps1577 {
  config: DeepPartial1577<NestedConfig1577>;
  path?: ConfigPaths1577;
}

const HeavyComponent1577 = memo(function HeavyComponent1577({ config }: HeavyProps1577) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1577) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1577 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1577: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1577.displayName = 'HeavyComponent1577';
export default HeavyComponent1577;
