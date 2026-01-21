'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6793<T> = T extends (infer U)[]
  ? DeepReadonlyArray6793<U>
  : T extends object
  ? DeepReadonlyObject6793<T>
  : T;

interface DeepReadonlyArray6793<T> extends ReadonlyArray<DeepReadonly6793<T>> {}

type DeepReadonlyObject6793<T> = {
  readonly [P in keyof T]: DeepReadonly6793<T[P]>;
};

type UnionToIntersection6793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6793<T> = UnionToIntersection6793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6793<T extends unknown[], V> = [...T, V];

type TuplifyUnion6793<T, L = LastOf6793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6793<TuplifyUnion6793<Exclude<T, L>>, L>;

type DeepPartial6793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6793<T[P]> }
  : T;

type Paths6793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6793<K, Paths6793<T[K], Prev6793[D]>> : never }[keyof T]
  : never;

type Prev6793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6793 {
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

type ConfigPaths6793 = Paths6793<NestedConfig6793>;

interface HeavyProps6793 {
  config: DeepPartial6793<NestedConfig6793>;
  path?: ConfigPaths6793;
}

const HeavyComponent6793 = memo(function HeavyComponent6793({ config }: HeavyProps6793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6793.displayName = 'HeavyComponent6793';
export default HeavyComponent6793;
