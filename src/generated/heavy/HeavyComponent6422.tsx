'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6422<T> = T extends (infer U)[]
  ? DeepReadonlyArray6422<U>
  : T extends object
  ? DeepReadonlyObject6422<T>
  : T;

interface DeepReadonlyArray6422<T> extends ReadonlyArray<DeepReadonly6422<T>> {}

type DeepReadonlyObject6422<T> = {
  readonly [P in keyof T]: DeepReadonly6422<T[P]>;
};

type UnionToIntersection6422<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6422<T> = UnionToIntersection6422<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6422<T extends unknown[], V> = [...T, V];

type TuplifyUnion6422<T, L = LastOf6422<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6422<TuplifyUnion6422<Exclude<T, L>>, L>;

type DeepPartial6422<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6422<T[P]> }
  : T;

type Paths6422<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6422<K, Paths6422<T[K], Prev6422[D]>> : never }[keyof T]
  : never;

type Prev6422 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6422<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6422 {
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

type ConfigPaths6422 = Paths6422<NestedConfig6422>;

interface HeavyProps6422 {
  config: DeepPartial6422<NestedConfig6422>;
  path?: ConfigPaths6422;
}

const HeavyComponent6422 = memo(function HeavyComponent6422({ config }: HeavyProps6422) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6422) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6422 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6422: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6422.displayName = 'HeavyComponent6422';
export default HeavyComponent6422;
