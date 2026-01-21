'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6586<T> = T extends (infer U)[]
  ? DeepReadonlyArray6586<U>
  : T extends object
  ? DeepReadonlyObject6586<T>
  : T;

interface DeepReadonlyArray6586<T> extends ReadonlyArray<DeepReadonly6586<T>> {}

type DeepReadonlyObject6586<T> = {
  readonly [P in keyof T]: DeepReadonly6586<T[P]>;
};

type UnionToIntersection6586<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6586<T> = UnionToIntersection6586<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6586<T extends unknown[], V> = [...T, V];

type TuplifyUnion6586<T, L = LastOf6586<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6586<TuplifyUnion6586<Exclude<T, L>>, L>;

type DeepPartial6586<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6586<T[P]> }
  : T;

type Paths6586<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6586<K, Paths6586<T[K], Prev6586[D]>> : never }[keyof T]
  : never;

type Prev6586 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6586<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6586 {
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

type ConfigPaths6586 = Paths6586<NestedConfig6586>;

interface HeavyProps6586 {
  config: DeepPartial6586<NestedConfig6586>;
  path?: ConfigPaths6586;
}

const HeavyComponent6586 = memo(function HeavyComponent6586({ config }: HeavyProps6586) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6586) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6586 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6586: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6586.displayName = 'HeavyComponent6586';
export default HeavyComponent6586;
