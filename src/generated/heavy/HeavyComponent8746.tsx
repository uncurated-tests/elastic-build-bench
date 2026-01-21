'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8746<T> = T extends (infer U)[]
  ? DeepReadonlyArray8746<U>
  : T extends object
  ? DeepReadonlyObject8746<T>
  : T;

interface DeepReadonlyArray8746<T> extends ReadonlyArray<DeepReadonly8746<T>> {}

type DeepReadonlyObject8746<T> = {
  readonly [P in keyof T]: DeepReadonly8746<T[P]>;
};

type UnionToIntersection8746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8746<T> = UnionToIntersection8746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8746<T extends unknown[], V> = [...T, V];

type TuplifyUnion8746<T, L = LastOf8746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8746<TuplifyUnion8746<Exclude<T, L>>, L>;

type DeepPartial8746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8746<T[P]> }
  : T;

type Paths8746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8746<K, Paths8746<T[K], Prev8746[D]>> : never }[keyof T]
  : never;

type Prev8746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8746 {
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

type ConfigPaths8746 = Paths8746<NestedConfig8746>;

interface HeavyProps8746 {
  config: DeepPartial8746<NestedConfig8746>;
  path?: ConfigPaths8746;
}

const HeavyComponent8746 = memo(function HeavyComponent8746({ config }: HeavyProps8746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8746.displayName = 'HeavyComponent8746';
export default HeavyComponent8746;
