'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6480<T> = T extends (infer U)[]
  ? DeepReadonlyArray6480<U>
  : T extends object
  ? DeepReadonlyObject6480<T>
  : T;

interface DeepReadonlyArray6480<T> extends ReadonlyArray<DeepReadonly6480<T>> {}

type DeepReadonlyObject6480<T> = {
  readonly [P in keyof T]: DeepReadonly6480<T[P]>;
};

type UnionToIntersection6480<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6480<T> = UnionToIntersection6480<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6480<T extends unknown[], V> = [...T, V];

type TuplifyUnion6480<T, L = LastOf6480<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6480<TuplifyUnion6480<Exclude<T, L>>, L>;

type DeepPartial6480<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6480<T[P]> }
  : T;

type Paths6480<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6480<K, Paths6480<T[K], Prev6480[D]>> : never }[keyof T]
  : never;

type Prev6480 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6480<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6480 {
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

type ConfigPaths6480 = Paths6480<NestedConfig6480>;

interface HeavyProps6480 {
  config: DeepPartial6480<NestedConfig6480>;
  path?: ConfigPaths6480;
}

const HeavyComponent6480 = memo(function HeavyComponent6480({ config }: HeavyProps6480) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6480) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6480 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6480: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6480.displayName = 'HeavyComponent6480';
export default HeavyComponent6480;
