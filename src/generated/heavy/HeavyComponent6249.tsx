'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6249<T> = T extends (infer U)[]
  ? DeepReadonlyArray6249<U>
  : T extends object
  ? DeepReadonlyObject6249<T>
  : T;

interface DeepReadonlyArray6249<T> extends ReadonlyArray<DeepReadonly6249<T>> {}

type DeepReadonlyObject6249<T> = {
  readonly [P in keyof T]: DeepReadonly6249<T[P]>;
};

type UnionToIntersection6249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6249<T> = UnionToIntersection6249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6249<T extends unknown[], V> = [...T, V];

type TuplifyUnion6249<T, L = LastOf6249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6249<TuplifyUnion6249<Exclude<T, L>>, L>;

type DeepPartial6249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6249<T[P]> }
  : T;

type Paths6249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6249<K, Paths6249<T[K], Prev6249[D]>> : never }[keyof T]
  : never;

type Prev6249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6249 {
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

type ConfigPaths6249 = Paths6249<NestedConfig6249>;

interface HeavyProps6249 {
  config: DeepPartial6249<NestedConfig6249>;
  path?: ConfigPaths6249;
}

const HeavyComponent6249 = memo(function HeavyComponent6249({ config }: HeavyProps6249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6249.displayName = 'HeavyComponent6249';
export default HeavyComponent6249;
