'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6862<T> = T extends (infer U)[]
  ? DeepReadonlyArray6862<U>
  : T extends object
  ? DeepReadonlyObject6862<T>
  : T;

interface DeepReadonlyArray6862<T> extends ReadonlyArray<DeepReadonly6862<T>> {}

type DeepReadonlyObject6862<T> = {
  readonly [P in keyof T]: DeepReadonly6862<T[P]>;
};

type UnionToIntersection6862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6862<T> = UnionToIntersection6862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6862<T extends unknown[], V> = [...T, V];

type TuplifyUnion6862<T, L = LastOf6862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6862<TuplifyUnion6862<Exclude<T, L>>, L>;

type DeepPartial6862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6862<T[P]> }
  : T;

type Paths6862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6862<K, Paths6862<T[K], Prev6862[D]>> : never }[keyof T]
  : never;

type Prev6862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6862 {
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

type ConfigPaths6862 = Paths6862<NestedConfig6862>;

interface HeavyProps6862 {
  config: DeepPartial6862<NestedConfig6862>;
  path?: ConfigPaths6862;
}

const HeavyComponent6862 = memo(function HeavyComponent6862({ config }: HeavyProps6862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6862.displayName = 'HeavyComponent6862';
export default HeavyComponent6862;
