'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6626<T> = T extends (infer U)[]
  ? DeepReadonlyArray6626<U>
  : T extends object
  ? DeepReadonlyObject6626<T>
  : T;

interface DeepReadonlyArray6626<T> extends ReadonlyArray<DeepReadonly6626<T>> {}

type DeepReadonlyObject6626<T> = {
  readonly [P in keyof T]: DeepReadonly6626<T[P]>;
};

type UnionToIntersection6626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6626<T> = UnionToIntersection6626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6626<T extends unknown[], V> = [...T, V];

type TuplifyUnion6626<T, L = LastOf6626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6626<TuplifyUnion6626<Exclude<T, L>>, L>;

type DeepPartial6626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6626<T[P]> }
  : T;

type Paths6626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6626<K, Paths6626<T[K], Prev6626[D]>> : never }[keyof T]
  : never;

type Prev6626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6626 {
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

type ConfigPaths6626 = Paths6626<NestedConfig6626>;

interface HeavyProps6626 {
  config: DeepPartial6626<NestedConfig6626>;
  path?: ConfigPaths6626;
}

const HeavyComponent6626 = memo(function HeavyComponent6626({ config }: HeavyProps6626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6626.displayName = 'HeavyComponent6626';
export default HeavyComponent6626;
