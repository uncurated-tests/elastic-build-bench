'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6046<T> = T extends (infer U)[]
  ? DeepReadonlyArray6046<U>
  : T extends object
  ? DeepReadonlyObject6046<T>
  : T;

interface DeepReadonlyArray6046<T> extends ReadonlyArray<DeepReadonly6046<T>> {}

type DeepReadonlyObject6046<T> = {
  readonly [P in keyof T]: DeepReadonly6046<T[P]>;
};

type UnionToIntersection6046<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6046<T> = UnionToIntersection6046<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6046<T extends unknown[], V> = [...T, V];

type TuplifyUnion6046<T, L = LastOf6046<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6046<TuplifyUnion6046<Exclude<T, L>>, L>;

type DeepPartial6046<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6046<T[P]> }
  : T;

type Paths6046<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6046<K, Paths6046<T[K], Prev6046[D]>> : never }[keyof T]
  : never;

type Prev6046 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6046<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6046 {
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

type ConfigPaths6046 = Paths6046<NestedConfig6046>;

interface HeavyProps6046 {
  config: DeepPartial6046<NestedConfig6046>;
  path?: ConfigPaths6046;
}

const HeavyComponent6046 = memo(function HeavyComponent6046({ config }: HeavyProps6046) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6046) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6046 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6046: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6046.displayName = 'HeavyComponent6046';
export default HeavyComponent6046;
