'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8196<T> = T extends (infer U)[]
  ? DeepReadonlyArray8196<U>
  : T extends object
  ? DeepReadonlyObject8196<T>
  : T;

interface DeepReadonlyArray8196<T> extends ReadonlyArray<DeepReadonly8196<T>> {}

type DeepReadonlyObject8196<T> = {
  readonly [P in keyof T]: DeepReadonly8196<T[P]>;
};

type UnionToIntersection8196<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8196<T> = UnionToIntersection8196<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8196<T extends unknown[], V> = [...T, V];

type TuplifyUnion8196<T, L = LastOf8196<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8196<TuplifyUnion8196<Exclude<T, L>>, L>;

type DeepPartial8196<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8196<T[P]> }
  : T;

type Paths8196<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8196<K, Paths8196<T[K], Prev8196[D]>> : never }[keyof T]
  : never;

type Prev8196 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8196<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8196 {
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

type ConfigPaths8196 = Paths8196<NestedConfig8196>;

interface HeavyProps8196 {
  config: DeepPartial8196<NestedConfig8196>;
  path?: ConfigPaths8196;
}

const HeavyComponent8196 = memo(function HeavyComponent8196({ config }: HeavyProps8196) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8196) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8196 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8196: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8196.displayName = 'HeavyComponent8196';
export default HeavyComponent8196;
