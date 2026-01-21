'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6221<T> = T extends (infer U)[]
  ? DeepReadonlyArray6221<U>
  : T extends object
  ? DeepReadonlyObject6221<T>
  : T;

interface DeepReadonlyArray6221<T> extends ReadonlyArray<DeepReadonly6221<T>> {}

type DeepReadonlyObject6221<T> = {
  readonly [P in keyof T]: DeepReadonly6221<T[P]>;
};

type UnionToIntersection6221<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6221<T> = UnionToIntersection6221<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6221<T extends unknown[], V> = [...T, V];

type TuplifyUnion6221<T, L = LastOf6221<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6221<TuplifyUnion6221<Exclude<T, L>>, L>;

type DeepPartial6221<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6221<T[P]> }
  : T;

type Paths6221<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6221<K, Paths6221<T[K], Prev6221[D]>> : never }[keyof T]
  : never;

type Prev6221 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6221<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6221 {
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

type ConfigPaths6221 = Paths6221<NestedConfig6221>;

interface HeavyProps6221 {
  config: DeepPartial6221<NestedConfig6221>;
  path?: ConfigPaths6221;
}

const HeavyComponent6221 = memo(function HeavyComponent6221({ config }: HeavyProps6221) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6221) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6221 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6221: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6221.displayName = 'HeavyComponent6221';
export default HeavyComponent6221;
