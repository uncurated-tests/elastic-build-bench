'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6039<T> = T extends (infer U)[]
  ? DeepReadonlyArray6039<U>
  : T extends object
  ? DeepReadonlyObject6039<T>
  : T;

interface DeepReadonlyArray6039<T> extends ReadonlyArray<DeepReadonly6039<T>> {}

type DeepReadonlyObject6039<T> = {
  readonly [P in keyof T]: DeepReadonly6039<T[P]>;
};

type UnionToIntersection6039<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6039<T> = UnionToIntersection6039<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6039<T extends unknown[], V> = [...T, V];

type TuplifyUnion6039<T, L = LastOf6039<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6039<TuplifyUnion6039<Exclude<T, L>>, L>;

type DeepPartial6039<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6039<T[P]> }
  : T;

type Paths6039<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6039<K, Paths6039<T[K], Prev6039[D]>> : never }[keyof T]
  : never;

type Prev6039 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6039<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6039 {
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

type ConfigPaths6039 = Paths6039<NestedConfig6039>;

interface HeavyProps6039 {
  config: DeepPartial6039<NestedConfig6039>;
  path?: ConfigPaths6039;
}

const HeavyComponent6039 = memo(function HeavyComponent6039({ config }: HeavyProps6039) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6039) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6039 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6039: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6039.displayName = 'HeavyComponent6039';
export default HeavyComponent6039;
