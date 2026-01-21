'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6227<T> = T extends (infer U)[]
  ? DeepReadonlyArray6227<U>
  : T extends object
  ? DeepReadonlyObject6227<T>
  : T;

interface DeepReadonlyArray6227<T> extends ReadonlyArray<DeepReadonly6227<T>> {}

type DeepReadonlyObject6227<T> = {
  readonly [P in keyof T]: DeepReadonly6227<T[P]>;
};

type UnionToIntersection6227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6227<T> = UnionToIntersection6227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6227<T extends unknown[], V> = [...T, V];

type TuplifyUnion6227<T, L = LastOf6227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6227<TuplifyUnion6227<Exclude<T, L>>, L>;

type DeepPartial6227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6227<T[P]> }
  : T;

type Paths6227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6227<K, Paths6227<T[K], Prev6227[D]>> : never }[keyof T]
  : never;

type Prev6227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6227 {
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

type ConfigPaths6227 = Paths6227<NestedConfig6227>;

interface HeavyProps6227 {
  config: DeepPartial6227<NestedConfig6227>;
  path?: ConfigPaths6227;
}

const HeavyComponent6227 = memo(function HeavyComponent6227({ config }: HeavyProps6227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6227.displayName = 'HeavyComponent6227';
export default HeavyComponent6227;
