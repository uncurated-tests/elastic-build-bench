'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly4174<T> = T extends (infer U)[]
  ? DeepReadonlyArray4174<U>
  : T extends object
  ? DeepReadonlyObject4174<T>
  : T;

interface DeepReadonlyArray4174<T> extends ReadonlyArray<DeepReadonly4174<T>> {}

type DeepReadonlyObject4174<T> = {
  readonly [P in keyof T]: DeepReadonly4174<T[P]>;
};

type UnionToIntersection4174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf4174<T> = UnionToIntersection4174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push4174<T extends unknown[], V> = [...T, V];

type TuplifyUnion4174<T, L = LastOf4174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push4174<TuplifyUnion4174<Exclude<T, L>>, L>;

type DeepPartial4174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial4174<T[P]> }
  : T;

type Paths4174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join4174<K, Paths4174<T[K], Prev4174[D]>> : never }[keyof T]
  : never;

type Prev4174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join4174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig4174 {
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

type ConfigPaths4174 = Paths4174<NestedConfig4174>;

interface HeavyProps4174 {
  config: DeepPartial4174<NestedConfig4174>;
  path?: ConfigPaths4174;
}

const HeavyComponent4174 = memo(function HeavyComponent4174({ config }: HeavyProps4174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 4174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-4174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H4174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent4174.displayName = 'HeavyComponent4174';
export default HeavyComponent4174;
