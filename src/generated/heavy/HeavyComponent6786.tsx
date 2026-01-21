'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6786<T> = T extends (infer U)[]
  ? DeepReadonlyArray6786<U>
  : T extends object
  ? DeepReadonlyObject6786<T>
  : T;

interface DeepReadonlyArray6786<T> extends ReadonlyArray<DeepReadonly6786<T>> {}

type DeepReadonlyObject6786<T> = {
  readonly [P in keyof T]: DeepReadonly6786<T[P]>;
};

type UnionToIntersection6786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6786<T> = UnionToIntersection6786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6786<T extends unknown[], V> = [...T, V];

type TuplifyUnion6786<T, L = LastOf6786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6786<TuplifyUnion6786<Exclude<T, L>>, L>;

type DeepPartial6786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6786<T[P]> }
  : T;

type Paths6786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6786<K, Paths6786<T[K], Prev6786[D]>> : never }[keyof T]
  : never;

type Prev6786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6786 {
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

type ConfigPaths6786 = Paths6786<NestedConfig6786>;

interface HeavyProps6786 {
  config: DeepPartial6786<NestedConfig6786>;
  path?: ConfigPaths6786;
}

const HeavyComponent6786 = memo(function HeavyComponent6786({ config }: HeavyProps6786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6786.displayName = 'HeavyComponent6786';
export default HeavyComponent6786;
