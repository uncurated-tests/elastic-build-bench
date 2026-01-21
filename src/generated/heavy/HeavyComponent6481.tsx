'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6481<T> = T extends (infer U)[]
  ? DeepReadonlyArray6481<U>
  : T extends object
  ? DeepReadonlyObject6481<T>
  : T;

interface DeepReadonlyArray6481<T> extends ReadonlyArray<DeepReadonly6481<T>> {}

type DeepReadonlyObject6481<T> = {
  readonly [P in keyof T]: DeepReadonly6481<T[P]>;
};

type UnionToIntersection6481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6481<T> = UnionToIntersection6481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6481<T extends unknown[], V> = [...T, V];

type TuplifyUnion6481<T, L = LastOf6481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6481<TuplifyUnion6481<Exclude<T, L>>, L>;

type DeepPartial6481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6481<T[P]> }
  : T;

type Paths6481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6481<K, Paths6481<T[K], Prev6481[D]>> : never }[keyof T]
  : never;

type Prev6481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6481 {
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

type ConfigPaths6481 = Paths6481<NestedConfig6481>;

interface HeavyProps6481 {
  config: DeepPartial6481<NestedConfig6481>;
  path?: ConfigPaths6481;
}

const HeavyComponent6481 = memo(function HeavyComponent6481({ config }: HeavyProps6481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6481.displayName = 'HeavyComponent6481';
export default HeavyComponent6481;
