'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1656<T> = T extends (infer U)[]
  ? DeepReadonlyArray1656<U>
  : T extends object
  ? DeepReadonlyObject1656<T>
  : T;

interface DeepReadonlyArray1656<T> extends ReadonlyArray<DeepReadonly1656<T>> {}

type DeepReadonlyObject1656<T> = {
  readonly [P in keyof T]: DeepReadonly1656<T[P]>;
};

type UnionToIntersection1656<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1656<T> = UnionToIntersection1656<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1656<T extends unknown[], V> = [...T, V];

type TuplifyUnion1656<T, L = LastOf1656<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1656<TuplifyUnion1656<Exclude<T, L>>, L>;

type DeepPartial1656<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1656<T[P]> }
  : T;

type Paths1656<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1656<K, Paths1656<T[K], Prev1656[D]>> : never }[keyof T]
  : never;

type Prev1656 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1656<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1656 {
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

type ConfigPaths1656 = Paths1656<NestedConfig1656>;

interface HeavyProps1656 {
  config: DeepPartial1656<NestedConfig1656>;
  path?: ConfigPaths1656;
}

const HeavyComponent1656 = memo(function HeavyComponent1656({ config }: HeavyProps1656) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1656) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1656 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1656: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1656.displayName = 'HeavyComponent1656';
export default HeavyComponent1656;
