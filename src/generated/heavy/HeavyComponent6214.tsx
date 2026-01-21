'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6214<T> = T extends (infer U)[]
  ? DeepReadonlyArray6214<U>
  : T extends object
  ? DeepReadonlyObject6214<T>
  : T;

interface DeepReadonlyArray6214<T> extends ReadonlyArray<DeepReadonly6214<T>> {}

type DeepReadonlyObject6214<T> = {
  readonly [P in keyof T]: DeepReadonly6214<T[P]>;
};

type UnionToIntersection6214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6214<T> = UnionToIntersection6214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6214<T extends unknown[], V> = [...T, V];

type TuplifyUnion6214<T, L = LastOf6214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6214<TuplifyUnion6214<Exclude<T, L>>, L>;

type DeepPartial6214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6214<T[P]> }
  : T;

type Paths6214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6214<K, Paths6214<T[K], Prev6214[D]>> : never }[keyof T]
  : never;

type Prev6214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6214 {
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

type ConfigPaths6214 = Paths6214<NestedConfig6214>;

interface HeavyProps6214 {
  config: DeepPartial6214<NestedConfig6214>;
  path?: ConfigPaths6214;
}

const HeavyComponent6214 = memo(function HeavyComponent6214({ config }: HeavyProps6214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6214.displayName = 'HeavyComponent6214';
export default HeavyComponent6214;
