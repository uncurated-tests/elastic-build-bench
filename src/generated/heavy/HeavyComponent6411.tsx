'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly6411<T> = T extends (infer U)[]
  ? DeepReadonlyArray6411<U>
  : T extends object
  ? DeepReadonlyObject6411<T>
  : T;

interface DeepReadonlyArray6411<T> extends ReadonlyArray<DeepReadonly6411<T>> {}

type DeepReadonlyObject6411<T> = {
  readonly [P in keyof T]: DeepReadonly6411<T[P]>;
};

type UnionToIntersection6411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf6411<T> = UnionToIntersection6411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push6411<T extends unknown[], V> = [...T, V];

type TuplifyUnion6411<T, L = LastOf6411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push6411<TuplifyUnion6411<Exclude<T, L>>, L>;

type DeepPartial6411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial6411<T[P]> }
  : T;

type Paths6411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join6411<K, Paths6411<T[K], Prev6411[D]>> : never }[keyof T]
  : never;

type Prev6411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join6411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig6411 {
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

type ConfigPaths6411 = Paths6411<NestedConfig6411>;

interface HeavyProps6411 {
  config: DeepPartial6411<NestedConfig6411>;
  path?: ConfigPaths6411;
}

const HeavyComponent6411 = memo(function HeavyComponent6411({ config }: HeavyProps6411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 6411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-6411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H6411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent6411.displayName = 'HeavyComponent6411';
export default HeavyComponent6411;
