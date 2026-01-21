'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8094<T> = T extends (infer U)[]
  ? DeepReadonlyArray8094<U>
  : T extends object
  ? DeepReadonlyObject8094<T>
  : T;

interface DeepReadonlyArray8094<T> extends ReadonlyArray<DeepReadonly8094<T>> {}

type DeepReadonlyObject8094<T> = {
  readonly [P in keyof T]: DeepReadonly8094<T[P]>;
};

type UnionToIntersection8094<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8094<T> = UnionToIntersection8094<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8094<T extends unknown[], V> = [...T, V];

type TuplifyUnion8094<T, L = LastOf8094<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8094<TuplifyUnion8094<Exclude<T, L>>, L>;

type DeepPartial8094<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8094<T[P]> }
  : T;

type Paths8094<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8094<K, Paths8094<T[K], Prev8094[D]>> : never }[keyof T]
  : never;

type Prev8094 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8094<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8094 {
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

type ConfigPaths8094 = Paths8094<NestedConfig8094>;

interface HeavyProps8094 {
  config: DeepPartial8094<NestedConfig8094>;
  path?: ConfigPaths8094;
}

const HeavyComponent8094 = memo(function HeavyComponent8094({ config }: HeavyProps8094) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8094) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8094 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8094: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8094.displayName = 'HeavyComponent8094';
export default HeavyComponent8094;
