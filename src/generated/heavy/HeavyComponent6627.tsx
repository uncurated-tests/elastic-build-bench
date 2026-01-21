'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6627<T> = T extends (infer U)[]
  ? DeepReadonlyArray6627<U>
  : T extends object
  ? DeepReadonlyObject6627<T>
  : T;

interface DeepReadonlyArray6627<T> extends ReadonlyArray<DeepReadonly6627<T>> {}

type DeepReadonlyObject6627<T> = {
  readonly [P in keyof T]: DeepReadonly6627<T[P]>;
};

type UnionToIntersection6627<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6627<T> = UnionToIntersection6627<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6627<T extends unknown[], V> = [...T, V];

type TuplifyUnion6627<T, L = LastOf6627<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6627<TuplifyUnion6627<Exclude<T, L>>, L>;

type DeepPartial6627<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6627<T[P]> }
  : T;

type Paths6627<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6627<K, Paths6627<T[K], Prev6627[D]>> : never }[keyof T]
  : never;

type Prev6627 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6627<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6627 {
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

type ConfigPaths6627 = Paths6627<NestedConfig6627>;

interface HeavyProps6627 {
  config: DeepPartial6627<NestedConfig6627>;
  path?: ConfigPaths6627;
}

const HeavyComponent6627 = memo(function HeavyComponent6627({ config }: HeavyProps6627) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6627) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6627 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6627: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6627.displayName = 'HeavyComponent6627';
export default HeavyComponent6627;
