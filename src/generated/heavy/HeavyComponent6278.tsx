'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6278<T> = T extends (infer U)[]
  ? DeepReadonlyArray6278<U>
  : T extends object
  ? DeepReadonlyObject6278<T>
  : T;

interface DeepReadonlyArray6278<T> extends ReadonlyArray<DeepReadonly6278<T>> {}

type DeepReadonlyObject6278<T> = {
  readonly [P in keyof T]: DeepReadonly6278<T[P]>;
};

type UnionToIntersection6278<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6278<T> = UnionToIntersection6278<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6278<T extends unknown[], V> = [...T, V];

type TuplifyUnion6278<T, L = LastOf6278<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6278<TuplifyUnion6278<Exclude<T, L>>, L>;

type DeepPartial6278<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6278<T[P]> }
  : T;

type Paths6278<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6278<K, Paths6278<T[K], Prev6278[D]>> : never }[keyof T]
  : never;

type Prev6278 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6278<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6278 {
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

type ConfigPaths6278 = Paths6278<NestedConfig6278>;

interface HeavyProps6278 {
  config: DeepPartial6278<NestedConfig6278>;
  path?: ConfigPaths6278;
}

const HeavyComponent6278 = memo(function HeavyComponent6278({ config }: HeavyProps6278) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6278) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6278 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6278: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6278.displayName = 'HeavyComponent6278';
export default HeavyComponent6278;
