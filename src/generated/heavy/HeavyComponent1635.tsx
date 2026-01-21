'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1635<T> = T extends (infer U)[]
  ? DeepReadonlyArray1635<U>
  : T extends object
  ? DeepReadonlyObject1635<T>
  : T;

interface DeepReadonlyArray1635<T> extends ReadonlyArray<DeepReadonly1635<T>> {}

type DeepReadonlyObject1635<T> = {
  readonly [P in keyof T]: DeepReadonly1635<T[P]>;
};

type UnionToIntersection1635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1635<T> = UnionToIntersection1635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1635<T extends unknown[], V> = [...T, V];

type TuplifyUnion1635<T, L = LastOf1635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1635<TuplifyUnion1635<Exclude<T, L>>, L>;

type DeepPartial1635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1635<T[P]> }
  : T;

type Paths1635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1635<K, Paths1635<T[K], Prev1635[D]>> : never }[keyof T]
  : never;

type Prev1635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1635 {
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

type ConfigPaths1635 = Paths1635<NestedConfig1635>;

interface HeavyProps1635 {
  config: DeepPartial1635<NestedConfig1635>;
  path?: ConfigPaths1635;
}

const HeavyComponent1635 = memo(function HeavyComponent1635({ config }: HeavyProps1635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1635.displayName = 'HeavyComponent1635';
export default HeavyComponent1635;
