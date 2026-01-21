'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8152<T> = T extends (infer U)[]
  ? DeepReadonlyArray8152<U>
  : T extends object
  ? DeepReadonlyObject8152<T>
  : T;

interface DeepReadonlyArray8152<T> extends ReadonlyArray<DeepReadonly8152<T>> {}

type DeepReadonlyObject8152<T> = {
  readonly [P in keyof T]: DeepReadonly8152<T[P]>;
};

type UnionToIntersection8152<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8152<T> = UnionToIntersection8152<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8152<T extends unknown[], V> = [...T, V];

type TuplifyUnion8152<T, L = LastOf8152<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8152<TuplifyUnion8152<Exclude<T, L>>, L>;

type DeepPartial8152<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8152<T[P]> }
  : T;

type Paths8152<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8152<K, Paths8152<T[K], Prev8152[D]>> : never }[keyof T]
  : never;

type Prev8152 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8152<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8152 {
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

type ConfigPaths8152 = Paths8152<NestedConfig8152>;

interface HeavyProps8152 {
  config: DeepPartial8152<NestedConfig8152>;
  path?: ConfigPaths8152;
}

const HeavyComponent8152 = memo(function HeavyComponent8152({ config }: HeavyProps8152) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8152) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8152 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8152: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8152.displayName = 'HeavyComponent8152';
export default HeavyComponent8152;
