'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6109<T> = T extends (infer U)[]
  ? DeepReadonlyArray6109<U>
  : T extends object
  ? DeepReadonlyObject6109<T>
  : T;

interface DeepReadonlyArray6109<T> extends ReadonlyArray<DeepReadonly6109<T>> {}

type DeepReadonlyObject6109<T> = {
  readonly [P in keyof T]: DeepReadonly6109<T[P]>;
};

type UnionToIntersection6109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6109<T> = UnionToIntersection6109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6109<T extends unknown[], V> = [...T, V];

type TuplifyUnion6109<T, L = LastOf6109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6109<TuplifyUnion6109<Exclude<T, L>>, L>;

type DeepPartial6109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6109<T[P]> }
  : T;

type Paths6109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6109<K, Paths6109<T[K], Prev6109[D]>> : never }[keyof T]
  : never;

type Prev6109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6109 {
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

type ConfigPaths6109 = Paths6109<NestedConfig6109>;

interface HeavyProps6109 {
  config: DeepPartial6109<NestedConfig6109>;
  path?: ConfigPaths6109;
}

const HeavyComponent6109 = memo(function HeavyComponent6109({ config }: HeavyProps6109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6109.displayName = 'HeavyComponent6109';
export default HeavyComponent6109;
