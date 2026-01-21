'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly418<T> = T extends (infer U)[]
  ? DeepReadonlyArray418<U>
  : T extends object
  ? DeepReadonlyObject418<T>
  : T;

interface DeepReadonlyArray418<T> extends ReadonlyArray<DeepReadonly418<T>> {}

type DeepReadonlyObject418<T> = {
  readonly [P in keyof T]: DeepReadonly418<T[P]>;
};

type UnionToIntersection418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf418<T> = UnionToIntersection418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push418<T extends unknown[], V> = [...T, V];

type TuplifyUnion418<T, L = LastOf418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push418<TuplifyUnion418<Exclude<T, L>>, L>;

type DeepPartial418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial418<T[P]> }
  : T;

type Paths418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join418<K, Paths418<T[K], Prev418[D]>> : never }[keyof T]
  : never;

type Prev418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig418 {
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

type ConfigPaths418 = Paths418<NestedConfig418>;

interface HeavyProps418 {
  config: DeepPartial418<NestedConfig418>;
  path?: ConfigPaths418;
}

const HeavyComponent418 = memo(function HeavyComponent418({ config }: HeavyProps418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent418.displayName = 'HeavyComponent418';
export default HeavyComponent418;
