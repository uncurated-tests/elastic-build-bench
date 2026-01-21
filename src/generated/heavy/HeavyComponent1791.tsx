'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1791<T> = T extends (infer U)[]
  ? DeepReadonlyArray1791<U>
  : T extends object
  ? DeepReadonlyObject1791<T>
  : T;

interface DeepReadonlyArray1791<T> extends ReadonlyArray<DeepReadonly1791<T>> {}

type DeepReadonlyObject1791<T> = {
  readonly [P in keyof T]: DeepReadonly1791<T[P]>;
};

type UnionToIntersection1791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1791<T> = UnionToIntersection1791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1791<T extends unknown[], V> = [...T, V];

type TuplifyUnion1791<T, L = LastOf1791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1791<TuplifyUnion1791<Exclude<T, L>>, L>;

type DeepPartial1791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1791<T[P]> }
  : T;

type Paths1791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1791<K, Paths1791<T[K], Prev1791[D]>> : never }[keyof T]
  : never;

type Prev1791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1791 {
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

type ConfigPaths1791 = Paths1791<NestedConfig1791>;

interface HeavyProps1791 {
  config: DeepPartial1791<NestedConfig1791>;
  path?: ConfigPaths1791;
}

const HeavyComponent1791 = memo(function HeavyComponent1791({ config }: HeavyProps1791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1791.displayName = 'HeavyComponent1791';
export default HeavyComponent1791;
