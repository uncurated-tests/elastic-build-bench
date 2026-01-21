'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6008<T> = T extends (infer U)[]
  ? DeepReadonlyArray6008<U>
  : T extends object
  ? DeepReadonlyObject6008<T>
  : T;

interface DeepReadonlyArray6008<T> extends ReadonlyArray<DeepReadonly6008<T>> {}

type DeepReadonlyObject6008<T> = {
  readonly [P in keyof T]: DeepReadonly6008<T[P]>;
};

type UnionToIntersection6008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6008<T> = UnionToIntersection6008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6008<T extends unknown[], V> = [...T, V];

type TuplifyUnion6008<T, L = LastOf6008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6008<TuplifyUnion6008<Exclude<T, L>>, L>;

type DeepPartial6008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6008<T[P]> }
  : T;

type Paths6008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6008<K, Paths6008<T[K], Prev6008[D]>> : never }[keyof T]
  : never;

type Prev6008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6008 {
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

type ConfigPaths6008 = Paths6008<NestedConfig6008>;

interface HeavyProps6008 {
  config: DeepPartial6008<NestedConfig6008>;
  path?: ConfigPaths6008;
}

const HeavyComponent6008 = memo(function HeavyComponent6008({ config }: HeavyProps6008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6008.displayName = 'HeavyComponent6008';
export default HeavyComponent6008;
