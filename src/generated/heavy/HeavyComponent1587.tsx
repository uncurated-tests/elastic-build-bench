'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1587<T> = T extends (infer U)[]
  ? DeepReadonlyArray1587<U>
  : T extends object
  ? DeepReadonlyObject1587<T>
  : T;

interface DeepReadonlyArray1587<T> extends ReadonlyArray<DeepReadonly1587<T>> {}

type DeepReadonlyObject1587<T> = {
  readonly [P in keyof T]: DeepReadonly1587<T[P]>;
};

type UnionToIntersection1587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1587<T> = UnionToIntersection1587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1587<T extends unknown[], V> = [...T, V];

type TuplifyUnion1587<T, L = LastOf1587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1587<TuplifyUnion1587<Exclude<T, L>>, L>;

type DeepPartial1587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1587<T[P]> }
  : T;

type Paths1587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1587<K, Paths1587<T[K], Prev1587[D]>> : never }[keyof T]
  : never;

type Prev1587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1587 {
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

type ConfigPaths1587 = Paths1587<NestedConfig1587>;

interface HeavyProps1587 {
  config: DeepPartial1587<NestedConfig1587>;
  path?: ConfigPaths1587;
}

const HeavyComponent1587 = memo(function HeavyComponent1587({ config }: HeavyProps1587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1587.displayName = 'HeavyComponent1587';
export default HeavyComponent1587;
