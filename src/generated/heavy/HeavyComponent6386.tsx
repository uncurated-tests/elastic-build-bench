'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6386<T> = T extends (infer U)[]
  ? DeepReadonlyArray6386<U>
  : T extends object
  ? DeepReadonlyObject6386<T>
  : T;

interface DeepReadonlyArray6386<T> extends ReadonlyArray<DeepReadonly6386<T>> {}

type DeepReadonlyObject6386<T> = {
  readonly [P in keyof T]: DeepReadonly6386<T[P]>;
};

type UnionToIntersection6386<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6386<T> = UnionToIntersection6386<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6386<T extends unknown[], V> = [...T, V];

type TuplifyUnion6386<T, L = LastOf6386<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6386<TuplifyUnion6386<Exclude<T, L>>, L>;

type DeepPartial6386<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6386<T[P]> }
  : T;

type Paths6386<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6386<K, Paths6386<T[K], Prev6386[D]>> : never }[keyof T]
  : never;

type Prev6386 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6386<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6386 {
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

type ConfigPaths6386 = Paths6386<NestedConfig6386>;

interface HeavyProps6386 {
  config: DeepPartial6386<NestedConfig6386>;
  path?: ConfigPaths6386;
}

const HeavyComponent6386 = memo(function HeavyComponent6386({ config }: HeavyProps6386) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6386) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6386 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6386: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6386.displayName = 'HeavyComponent6386';
export default HeavyComponent6386;
