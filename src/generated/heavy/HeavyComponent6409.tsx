'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6409<T> = T extends (infer U)[]
  ? DeepReadonlyArray6409<U>
  : T extends object
  ? DeepReadonlyObject6409<T>
  : T;

interface DeepReadonlyArray6409<T> extends ReadonlyArray<DeepReadonly6409<T>> {}

type DeepReadonlyObject6409<T> = {
  readonly [P in keyof T]: DeepReadonly6409<T[P]>;
};

type UnionToIntersection6409<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6409<T> = UnionToIntersection6409<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6409<T extends unknown[], V> = [...T, V];

type TuplifyUnion6409<T, L = LastOf6409<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6409<TuplifyUnion6409<Exclude<T, L>>, L>;

type DeepPartial6409<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6409<T[P]> }
  : T;

type Paths6409<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6409<K, Paths6409<T[K], Prev6409[D]>> : never }[keyof T]
  : never;

type Prev6409 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6409<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6409 {
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

type ConfigPaths6409 = Paths6409<NestedConfig6409>;

interface HeavyProps6409 {
  config: DeepPartial6409<NestedConfig6409>;
  path?: ConfigPaths6409;
}

const HeavyComponent6409 = memo(function HeavyComponent6409({ config }: HeavyProps6409) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6409) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6409 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6409: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6409.displayName = 'HeavyComponent6409';
export default HeavyComponent6409;
