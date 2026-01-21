'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6111<T> = T extends (infer U)[]
  ? DeepReadonlyArray6111<U>
  : T extends object
  ? DeepReadonlyObject6111<T>
  : T;

interface DeepReadonlyArray6111<T> extends ReadonlyArray<DeepReadonly6111<T>> {}

type DeepReadonlyObject6111<T> = {
  readonly [P in keyof T]: DeepReadonly6111<T[P]>;
};

type UnionToIntersection6111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6111<T> = UnionToIntersection6111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6111<T extends unknown[], V> = [...T, V];

type TuplifyUnion6111<T, L = LastOf6111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6111<TuplifyUnion6111<Exclude<T, L>>, L>;

type DeepPartial6111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6111<T[P]> }
  : T;

type Paths6111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6111<K, Paths6111<T[K], Prev6111[D]>> : never }[keyof T]
  : never;

type Prev6111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6111 {
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

type ConfigPaths6111 = Paths6111<NestedConfig6111>;

interface HeavyProps6111 {
  config: DeepPartial6111<NestedConfig6111>;
  path?: ConfigPaths6111;
}

const HeavyComponent6111 = memo(function HeavyComponent6111({ config }: HeavyProps6111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6111.displayName = 'HeavyComponent6111';
export default HeavyComponent6111;
