'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6974<T> = T extends (infer U)[]
  ? DeepReadonlyArray6974<U>
  : T extends object
  ? DeepReadonlyObject6974<T>
  : T;

interface DeepReadonlyArray6974<T> extends ReadonlyArray<DeepReadonly6974<T>> {}

type DeepReadonlyObject6974<T> = {
  readonly [P in keyof T]: DeepReadonly6974<T[P]>;
};

type UnionToIntersection6974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6974<T> = UnionToIntersection6974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6974<T extends unknown[], V> = [...T, V];

type TuplifyUnion6974<T, L = LastOf6974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6974<TuplifyUnion6974<Exclude<T, L>>, L>;

type DeepPartial6974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6974<T[P]> }
  : T;

type Paths6974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6974<K, Paths6974<T[K], Prev6974[D]>> : never }[keyof T]
  : never;

type Prev6974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6974 {
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

type ConfigPaths6974 = Paths6974<NestedConfig6974>;

interface HeavyProps6974 {
  config: DeepPartial6974<NestedConfig6974>;
  path?: ConfigPaths6974;
}

const HeavyComponent6974 = memo(function HeavyComponent6974({ config }: HeavyProps6974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6974.displayName = 'HeavyComponent6974';
export default HeavyComponent6974;
