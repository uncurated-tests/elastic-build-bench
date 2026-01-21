'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1970<T> = T extends (infer U)[]
  ? DeepReadonlyArray1970<U>
  : T extends object
  ? DeepReadonlyObject1970<T>
  : T;

interface DeepReadonlyArray1970<T> extends ReadonlyArray<DeepReadonly1970<T>> {}

type DeepReadonlyObject1970<T> = {
  readonly [P in keyof T]: DeepReadonly1970<T[P]>;
};

type UnionToIntersection1970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1970<T> = UnionToIntersection1970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1970<T extends unknown[], V> = [...T, V];

type TuplifyUnion1970<T, L = LastOf1970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1970<TuplifyUnion1970<Exclude<T, L>>, L>;

type DeepPartial1970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1970<T[P]> }
  : T;

type Paths1970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1970<K, Paths1970<T[K], Prev1970[D]>> : never }[keyof T]
  : never;

type Prev1970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1970 {
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

type ConfigPaths1970 = Paths1970<NestedConfig1970>;

interface HeavyProps1970 {
  config: DeepPartial1970<NestedConfig1970>;
  path?: ConfigPaths1970;
}

const HeavyComponent1970 = memo(function HeavyComponent1970({ config }: HeavyProps1970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1970.displayName = 'HeavyComponent1970';
export default HeavyComponent1970;
