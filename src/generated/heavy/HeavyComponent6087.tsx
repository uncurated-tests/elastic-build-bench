'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6087<T> = T extends (infer U)[]
  ? DeepReadonlyArray6087<U>
  : T extends object
  ? DeepReadonlyObject6087<T>
  : T;

interface DeepReadonlyArray6087<T> extends ReadonlyArray<DeepReadonly6087<T>> {}

type DeepReadonlyObject6087<T> = {
  readonly [P in keyof T]: DeepReadonly6087<T[P]>;
};

type UnionToIntersection6087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6087<T> = UnionToIntersection6087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6087<T extends unknown[], V> = [...T, V];

type TuplifyUnion6087<T, L = LastOf6087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6087<TuplifyUnion6087<Exclude<T, L>>, L>;

type DeepPartial6087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6087<T[P]> }
  : T;

type Paths6087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6087<K, Paths6087<T[K], Prev6087[D]>> : never }[keyof T]
  : never;

type Prev6087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6087 {
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

type ConfigPaths6087 = Paths6087<NestedConfig6087>;

interface HeavyProps6087 {
  config: DeepPartial6087<NestedConfig6087>;
  path?: ConfigPaths6087;
}

const HeavyComponent6087 = memo(function HeavyComponent6087({ config }: HeavyProps6087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6087.displayName = 'HeavyComponent6087';
export default HeavyComponent6087;
