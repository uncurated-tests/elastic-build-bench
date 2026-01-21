'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6127<T> = T extends (infer U)[]
  ? DeepReadonlyArray6127<U>
  : T extends object
  ? DeepReadonlyObject6127<T>
  : T;

interface DeepReadonlyArray6127<T> extends ReadonlyArray<DeepReadonly6127<T>> {}

type DeepReadonlyObject6127<T> = {
  readonly [P in keyof T]: DeepReadonly6127<T[P]>;
};

type UnionToIntersection6127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6127<T> = UnionToIntersection6127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6127<T extends unknown[], V> = [...T, V];

type TuplifyUnion6127<T, L = LastOf6127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6127<TuplifyUnion6127<Exclude<T, L>>, L>;

type DeepPartial6127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6127<T[P]> }
  : T;

type Paths6127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6127<K, Paths6127<T[K], Prev6127[D]>> : never }[keyof T]
  : never;

type Prev6127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6127 {
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

type ConfigPaths6127 = Paths6127<NestedConfig6127>;

interface HeavyProps6127 {
  config: DeepPartial6127<NestedConfig6127>;
  path?: ConfigPaths6127;
}

const HeavyComponent6127 = memo(function HeavyComponent6127({ config }: HeavyProps6127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6127.displayName = 'HeavyComponent6127';
export default HeavyComponent6127;
