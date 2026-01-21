'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6826<T> = T extends (infer U)[]
  ? DeepReadonlyArray6826<U>
  : T extends object
  ? DeepReadonlyObject6826<T>
  : T;

interface DeepReadonlyArray6826<T> extends ReadonlyArray<DeepReadonly6826<T>> {}

type DeepReadonlyObject6826<T> = {
  readonly [P in keyof T]: DeepReadonly6826<T[P]>;
};

type UnionToIntersection6826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6826<T> = UnionToIntersection6826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6826<T extends unknown[], V> = [...T, V];

type TuplifyUnion6826<T, L = LastOf6826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6826<TuplifyUnion6826<Exclude<T, L>>, L>;

type DeepPartial6826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6826<T[P]> }
  : T;

type Paths6826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6826<K, Paths6826<T[K], Prev6826[D]>> : never }[keyof T]
  : never;

type Prev6826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6826 {
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

type ConfigPaths6826 = Paths6826<NestedConfig6826>;

interface HeavyProps6826 {
  config: DeepPartial6826<NestedConfig6826>;
  path?: ConfigPaths6826;
}

const HeavyComponent6826 = memo(function HeavyComponent6826({ config }: HeavyProps6826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6826.displayName = 'HeavyComponent6826';
export default HeavyComponent6826;
