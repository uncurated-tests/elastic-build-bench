'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1771<T> = T extends (infer U)[]
  ? DeepReadonlyArray1771<U>
  : T extends object
  ? DeepReadonlyObject1771<T>
  : T;

interface DeepReadonlyArray1771<T> extends ReadonlyArray<DeepReadonly1771<T>> {}

type DeepReadonlyObject1771<T> = {
  readonly [P in keyof T]: DeepReadonly1771<T[P]>;
};

type UnionToIntersection1771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1771<T> = UnionToIntersection1771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1771<T extends unknown[], V> = [...T, V];

type TuplifyUnion1771<T, L = LastOf1771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1771<TuplifyUnion1771<Exclude<T, L>>, L>;

type DeepPartial1771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1771<T[P]> }
  : T;

type Paths1771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1771<K, Paths1771<T[K], Prev1771[D]>> : never }[keyof T]
  : never;

type Prev1771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1771 {
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

type ConfigPaths1771 = Paths1771<NestedConfig1771>;

interface HeavyProps1771 {
  config: DeepPartial1771<NestedConfig1771>;
  path?: ConfigPaths1771;
}

const HeavyComponent1771 = memo(function HeavyComponent1771({ config }: HeavyProps1771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1771.displayName = 'HeavyComponent1771';
export default HeavyComponent1771;
