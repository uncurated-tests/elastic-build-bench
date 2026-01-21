'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8366<T> = T extends (infer U)[]
  ? DeepReadonlyArray8366<U>
  : T extends object
  ? DeepReadonlyObject8366<T>
  : T;

interface DeepReadonlyArray8366<T> extends ReadonlyArray<DeepReadonly8366<T>> {}

type DeepReadonlyObject8366<T> = {
  readonly [P in keyof T]: DeepReadonly8366<T[P]>;
};

type UnionToIntersection8366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8366<T> = UnionToIntersection8366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8366<T extends unknown[], V> = [...T, V];

type TuplifyUnion8366<T, L = LastOf8366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8366<TuplifyUnion8366<Exclude<T, L>>, L>;

type DeepPartial8366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8366<T[P]> }
  : T;

type Paths8366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8366<K, Paths8366<T[K], Prev8366[D]>> : never }[keyof T]
  : never;

type Prev8366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8366 {
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

type ConfigPaths8366 = Paths8366<NestedConfig8366>;

interface HeavyProps8366 {
  config: DeepPartial8366<NestedConfig8366>;
  path?: ConfigPaths8366;
}

const HeavyComponent8366 = memo(function HeavyComponent8366({ config }: HeavyProps8366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8366.displayName = 'HeavyComponent8366';
export default HeavyComponent8366;
