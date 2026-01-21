'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6527<T> = T extends (infer U)[]
  ? DeepReadonlyArray6527<U>
  : T extends object
  ? DeepReadonlyObject6527<T>
  : T;

interface DeepReadonlyArray6527<T> extends ReadonlyArray<DeepReadonly6527<T>> {}

type DeepReadonlyObject6527<T> = {
  readonly [P in keyof T]: DeepReadonly6527<T[P]>;
};

type UnionToIntersection6527<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6527<T> = UnionToIntersection6527<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6527<T extends unknown[], V> = [...T, V];

type TuplifyUnion6527<T, L = LastOf6527<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6527<TuplifyUnion6527<Exclude<T, L>>, L>;

type DeepPartial6527<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6527<T[P]> }
  : T;

type Paths6527<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6527<K, Paths6527<T[K], Prev6527[D]>> : never }[keyof T]
  : never;

type Prev6527 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6527<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6527 {
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

type ConfigPaths6527 = Paths6527<NestedConfig6527>;

interface HeavyProps6527 {
  config: DeepPartial6527<NestedConfig6527>;
  path?: ConfigPaths6527;
}

const HeavyComponent6527 = memo(function HeavyComponent6527({ config }: HeavyProps6527) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6527) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6527 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6527: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6527.displayName = 'HeavyComponent6527';
export default HeavyComponent6527;
