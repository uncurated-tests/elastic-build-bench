'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6726<T> = T extends (infer U)[]
  ? DeepReadonlyArray6726<U>
  : T extends object
  ? DeepReadonlyObject6726<T>
  : T;

interface DeepReadonlyArray6726<T> extends ReadonlyArray<DeepReadonly6726<T>> {}

type DeepReadonlyObject6726<T> = {
  readonly [P in keyof T]: DeepReadonly6726<T[P]>;
};

type UnionToIntersection6726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6726<T> = UnionToIntersection6726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6726<T extends unknown[], V> = [...T, V];

type TuplifyUnion6726<T, L = LastOf6726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6726<TuplifyUnion6726<Exclude<T, L>>, L>;

type DeepPartial6726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6726<T[P]> }
  : T;

type Paths6726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6726<K, Paths6726<T[K], Prev6726[D]>> : never }[keyof T]
  : never;

type Prev6726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6726 {
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

type ConfigPaths6726 = Paths6726<NestedConfig6726>;

interface HeavyProps6726 {
  config: DeepPartial6726<NestedConfig6726>;
  path?: ConfigPaths6726;
}

const HeavyComponent6726 = memo(function HeavyComponent6726({ config }: HeavyProps6726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6726.displayName = 'HeavyComponent6726';
export default HeavyComponent6726;
