'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1046<T> = T extends (infer U)[]
  ? DeepReadonlyArray1046<U>
  : T extends object
  ? DeepReadonlyObject1046<T>
  : T;

interface DeepReadonlyArray1046<T> extends ReadonlyArray<DeepReadonly1046<T>> {}

type DeepReadonlyObject1046<T> = {
  readonly [P in keyof T]: DeepReadonly1046<T[P]>;
};

type UnionToIntersection1046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1046<T> = UnionToIntersection1046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1046<T extends unknown[], V> = [...T, V];

type TuplifyUnion1046<T, L = LastOf1046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1046<TuplifyUnion1046<Exclude<T, L>>, L>;

type DeepPartial1046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1046<T[P]> }
  : T;

type Paths1046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1046<K, Paths1046<T[K], Prev1046[D]>> : never }[keyof T]
  : never;

type Prev1046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1046 {
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

type ConfigPaths1046 = Paths1046<NestedConfig1046>;

interface HeavyProps1046 {
  config: DeepPartial1046<NestedConfig1046>;
  path?: ConfigPaths1046;
}

const HeavyComponent1046 = memo(function HeavyComponent1046({ config }: HeavyProps1046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1046.displayName = 'HeavyComponent1046';
export default HeavyComponent1046;
