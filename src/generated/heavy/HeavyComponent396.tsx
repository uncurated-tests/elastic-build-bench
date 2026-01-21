'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly396<T> = T extends (infer U)[]
  ? DeepReadonlyArray396<U>
  : T extends object
  ? DeepReadonlyObject396<T>
  : T;

interface DeepReadonlyArray396<T> extends ReadonlyArray<DeepReadonly396<T>> {}

type DeepReadonlyObject396<T> = {
  readonly [P in keyof T]: DeepReadonly396<T[P]>;
};

type UnionToIntersection396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf396<T> = UnionToIntersection396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push396<T extends unknown[], V> = [...T, V];

type TuplifyUnion396<T, L = LastOf396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push396<TuplifyUnion396<Exclude<T, L>>, L>;

type DeepPartial396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial396<T[P]> }
  : T;

type Paths396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join396<K, Paths396<T[K], Prev396[D]>> : never }[keyof T]
  : never;

type Prev396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig396 {
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

type ConfigPaths396 = Paths396<NestedConfig396>;

interface HeavyProps396 {
  config: DeepPartial396<NestedConfig396>;
  path?: ConfigPaths396;
}

const HeavyComponent396 = memo(function HeavyComponent396({ config }: HeavyProps396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent396.displayName = 'HeavyComponent396';
export default HeavyComponent396;
