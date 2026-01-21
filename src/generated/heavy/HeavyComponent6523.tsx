'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6523<T> = T extends (infer U)[]
  ? DeepReadonlyArray6523<U>
  : T extends object
  ? DeepReadonlyObject6523<T>
  : T;

interface DeepReadonlyArray6523<T> extends ReadonlyArray<DeepReadonly6523<T>> {}

type DeepReadonlyObject6523<T> = {
  readonly [P in keyof T]: DeepReadonly6523<T[P]>;
};

type UnionToIntersection6523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6523<T> = UnionToIntersection6523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6523<T extends unknown[], V> = [...T, V];

type TuplifyUnion6523<T, L = LastOf6523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6523<TuplifyUnion6523<Exclude<T, L>>, L>;

type DeepPartial6523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6523<T[P]> }
  : T;

type Paths6523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6523<K, Paths6523<T[K], Prev6523[D]>> : never }[keyof T]
  : never;

type Prev6523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6523 {
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

type ConfigPaths6523 = Paths6523<NestedConfig6523>;

interface HeavyProps6523 {
  config: DeepPartial6523<NestedConfig6523>;
  path?: ConfigPaths6523;
}

const HeavyComponent6523 = memo(function HeavyComponent6523({ config }: HeavyProps6523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6523.displayName = 'HeavyComponent6523';
export default HeavyComponent6523;
