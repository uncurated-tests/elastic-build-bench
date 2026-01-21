'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6123<T> = T extends (infer U)[]
  ? DeepReadonlyArray6123<U>
  : T extends object
  ? DeepReadonlyObject6123<T>
  : T;

interface DeepReadonlyArray6123<T> extends ReadonlyArray<DeepReadonly6123<T>> {}

type DeepReadonlyObject6123<T> = {
  readonly [P in keyof T]: DeepReadonly6123<T[P]>;
};

type UnionToIntersection6123<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6123<T> = UnionToIntersection6123<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6123<T extends unknown[], V> = [...T, V];

type TuplifyUnion6123<T, L = LastOf6123<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6123<TuplifyUnion6123<Exclude<T, L>>, L>;

type DeepPartial6123<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6123<T[P]> }
  : T;

type Paths6123<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6123<K, Paths6123<T[K], Prev6123[D]>> : never }[keyof T]
  : never;

type Prev6123 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6123<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6123 {
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

type ConfigPaths6123 = Paths6123<NestedConfig6123>;

interface HeavyProps6123 {
  config: DeepPartial6123<NestedConfig6123>;
  path?: ConfigPaths6123;
}

const HeavyComponent6123 = memo(function HeavyComponent6123({ config }: HeavyProps6123) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6123) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6123 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6123: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6123.displayName = 'HeavyComponent6123';
export default HeavyComponent6123;
