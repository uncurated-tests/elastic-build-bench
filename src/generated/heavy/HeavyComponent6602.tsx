'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6602<T> = T extends (infer U)[]
  ? DeepReadonlyArray6602<U>
  : T extends object
  ? DeepReadonlyObject6602<T>
  : T;

interface DeepReadonlyArray6602<T> extends ReadonlyArray<DeepReadonly6602<T>> {}

type DeepReadonlyObject6602<T> = {
  readonly [P in keyof T]: DeepReadonly6602<T[P]>;
};

type UnionToIntersection6602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6602<T> = UnionToIntersection6602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6602<T extends unknown[], V> = [...T, V];

type TuplifyUnion6602<T, L = LastOf6602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6602<TuplifyUnion6602<Exclude<T, L>>, L>;

type DeepPartial6602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6602<T[P]> }
  : T;

type Paths6602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6602<K, Paths6602<T[K], Prev6602[D]>> : never }[keyof T]
  : never;

type Prev6602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6602 {
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

type ConfigPaths6602 = Paths6602<NestedConfig6602>;

interface HeavyProps6602 {
  config: DeepPartial6602<NestedConfig6602>;
  path?: ConfigPaths6602;
}

const HeavyComponent6602 = memo(function HeavyComponent6602({ config }: HeavyProps6602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6602.displayName = 'HeavyComponent6602';
export default HeavyComponent6602;
