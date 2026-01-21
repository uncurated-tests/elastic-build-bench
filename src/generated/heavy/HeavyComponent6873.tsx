'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6873<T> = T extends (infer U)[]
  ? DeepReadonlyArray6873<U>
  : T extends object
  ? DeepReadonlyObject6873<T>
  : T;

interface DeepReadonlyArray6873<T> extends ReadonlyArray<DeepReadonly6873<T>> {}

type DeepReadonlyObject6873<T> = {
  readonly [P in keyof T]: DeepReadonly6873<T[P]>;
};

type UnionToIntersection6873<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6873<T> = UnionToIntersection6873<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6873<T extends unknown[], V> = [...T, V];

type TuplifyUnion6873<T, L = LastOf6873<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6873<TuplifyUnion6873<Exclude<T, L>>, L>;

type DeepPartial6873<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6873<T[P]> }
  : T;

type Paths6873<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6873<K, Paths6873<T[K], Prev6873[D]>> : never }[keyof T]
  : never;

type Prev6873 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6873<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6873 {
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

type ConfigPaths6873 = Paths6873<NestedConfig6873>;

interface HeavyProps6873 {
  config: DeepPartial6873<NestedConfig6873>;
  path?: ConfigPaths6873;
}

const HeavyComponent6873 = memo(function HeavyComponent6873({ config }: HeavyProps6873) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6873) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6873 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6873: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6873.displayName = 'HeavyComponent6873';
export default HeavyComponent6873;
