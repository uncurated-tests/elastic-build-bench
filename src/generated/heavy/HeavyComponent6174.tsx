'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6174<T> = T extends (infer U)[]
  ? DeepReadonlyArray6174<U>
  : T extends object
  ? DeepReadonlyObject6174<T>
  : T;

interface DeepReadonlyArray6174<T> extends ReadonlyArray<DeepReadonly6174<T>> {}

type DeepReadonlyObject6174<T> = {
  readonly [P in keyof T]: DeepReadonly6174<T[P]>;
};

type UnionToIntersection6174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6174<T> = UnionToIntersection6174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6174<T extends unknown[], V> = [...T, V];

type TuplifyUnion6174<T, L = LastOf6174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6174<TuplifyUnion6174<Exclude<T, L>>, L>;

type DeepPartial6174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6174<T[P]> }
  : T;

type Paths6174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6174<K, Paths6174<T[K], Prev6174[D]>> : never }[keyof T]
  : never;

type Prev6174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6174 {
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

type ConfigPaths6174 = Paths6174<NestedConfig6174>;

interface HeavyProps6174 {
  config: DeepPartial6174<NestedConfig6174>;
  path?: ConfigPaths6174;
}

const HeavyComponent6174 = memo(function HeavyComponent6174({ config }: HeavyProps6174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6174.displayName = 'HeavyComponent6174';
export default HeavyComponent6174;
