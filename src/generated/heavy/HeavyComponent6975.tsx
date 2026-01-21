'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6975<T> = T extends (infer U)[]
  ? DeepReadonlyArray6975<U>
  : T extends object
  ? DeepReadonlyObject6975<T>
  : T;

interface DeepReadonlyArray6975<T> extends ReadonlyArray<DeepReadonly6975<T>> {}

type DeepReadonlyObject6975<T> = {
  readonly [P in keyof T]: DeepReadonly6975<T[P]>;
};

type UnionToIntersection6975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6975<T> = UnionToIntersection6975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6975<T extends unknown[], V> = [...T, V];

type TuplifyUnion6975<T, L = LastOf6975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6975<TuplifyUnion6975<Exclude<T, L>>, L>;

type DeepPartial6975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6975<T[P]> }
  : T;

type Paths6975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6975<K, Paths6975<T[K], Prev6975[D]>> : never }[keyof T]
  : never;

type Prev6975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6975 {
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

type ConfigPaths6975 = Paths6975<NestedConfig6975>;

interface HeavyProps6975 {
  config: DeepPartial6975<NestedConfig6975>;
  path?: ConfigPaths6975;
}

const HeavyComponent6975 = memo(function HeavyComponent6975({ config }: HeavyProps6975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6975.displayName = 'HeavyComponent6975';
export default HeavyComponent6975;
