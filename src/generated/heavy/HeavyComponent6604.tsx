'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6604<T> = T extends (infer U)[]
  ? DeepReadonlyArray6604<U>
  : T extends object
  ? DeepReadonlyObject6604<T>
  : T;

interface DeepReadonlyArray6604<T> extends ReadonlyArray<DeepReadonly6604<T>> {}

type DeepReadonlyObject6604<T> = {
  readonly [P in keyof T]: DeepReadonly6604<T[P]>;
};

type UnionToIntersection6604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6604<T> = UnionToIntersection6604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6604<T extends unknown[], V> = [...T, V];

type TuplifyUnion6604<T, L = LastOf6604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6604<TuplifyUnion6604<Exclude<T, L>>, L>;

type DeepPartial6604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6604<T[P]> }
  : T;

type Paths6604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6604<K, Paths6604<T[K], Prev6604[D]>> : never }[keyof T]
  : never;

type Prev6604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6604 {
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

type ConfigPaths6604 = Paths6604<NestedConfig6604>;

interface HeavyProps6604 {
  config: DeepPartial6604<NestedConfig6604>;
  path?: ConfigPaths6604;
}

const HeavyComponent6604 = memo(function HeavyComponent6604({ config }: HeavyProps6604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6604.displayName = 'HeavyComponent6604';
export default HeavyComponent6604;
