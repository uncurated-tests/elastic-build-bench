'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6134<T> = T extends (infer U)[]
  ? DeepReadonlyArray6134<U>
  : T extends object
  ? DeepReadonlyObject6134<T>
  : T;

interface DeepReadonlyArray6134<T> extends ReadonlyArray<DeepReadonly6134<T>> {}

type DeepReadonlyObject6134<T> = {
  readonly [P in keyof T]: DeepReadonly6134<T[P]>;
};

type UnionToIntersection6134<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6134<T> = UnionToIntersection6134<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6134<T extends unknown[], V> = [...T, V];

type TuplifyUnion6134<T, L = LastOf6134<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6134<TuplifyUnion6134<Exclude<T, L>>, L>;

type DeepPartial6134<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6134<T[P]> }
  : T;

type Paths6134<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6134<K, Paths6134<T[K], Prev6134[D]>> : never }[keyof T]
  : never;

type Prev6134 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6134<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6134 {
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

type ConfigPaths6134 = Paths6134<NestedConfig6134>;

interface HeavyProps6134 {
  config: DeepPartial6134<NestedConfig6134>;
  path?: ConfigPaths6134;
}

const HeavyComponent6134 = memo(function HeavyComponent6134({ config }: HeavyProps6134) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6134) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6134 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6134: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6134.displayName = 'HeavyComponent6134';
export default HeavyComponent6134;
