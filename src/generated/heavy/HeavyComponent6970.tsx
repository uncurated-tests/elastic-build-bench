'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6970<T> = T extends (infer U)[]
  ? DeepReadonlyArray6970<U>
  : T extends object
  ? DeepReadonlyObject6970<T>
  : T;

interface DeepReadonlyArray6970<T> extends ReadonlyArray<DeepReadonly6970<T>> {}

type DeepReadonlyObject6970<T> = {
  readonly [P in keyof T]: DeepReadonly6970<T[P]>;
};

type UnionToIntersection6970<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6970<T> = UnionToIntersection6970<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6970<T extends unknown[], V> = [...T, V];

type TuplifyUnion6970<T, L = LastOf6970<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6970<TuplifyUnion6970<Exclude<T, L>>, L>;

type DeepPartial6970<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6970<T[P]> }
  : T;

type Paths6970<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6970<K, Paths6970<T[K], Prev6970[D]>> : never }[keyof T]
  : never;

type Prev6970 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6970<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6970 {
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

type ConfigPaths6970 = Paths6970<NestedConfig6970>;

interface HeavyProps6970 {
  config: DeepPartial6970<NestedConfig6970>;
  path?: ConfigPaths6970;
}

const HeavyComponent6970 = memo(function HeavyComponent6970({ config }: HeavyProps6970) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6970) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6970 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6970: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6970.displayName = 'HeavyComponent6970';
export default HeavyComponent6970;
