'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8144<T> = T extends (infer U)[]
  ? DeepReadonlyArray8144<U>
  : T extends object
  ? DeepReadonlyObject8144<T>
  : T;

interface DeepReadonlyArray8144<T> extends ReadonlyArray<DeepReadonly8144<T>> {}

type DeepReadonlyObject8144<T> = {
  readonly [P in keyof T]: DeepReadonly8144<T[P]>;
};

type UnionToIntersection8144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8144<T> = UnionToIntersection8144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8144<T extends unknown[], V> = [...T, V];

type TuplifyUnion8144<T, L = LastOf8144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8144<TuplifyUnion8144<Exclude<T, L>>, L>;

type DeepPartial8144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8144<T[P]> }
  : T;

type Paths8144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8144<K, Paths8144<T[K], Prev8144[D]>> : never }[keyof T]
  : never;

type Prev8144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8144 {
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

type ConfigPaths8144 = Paths8144<NestedConfig8144>;

interface HeavyProps8144 {
  config: DeepPartial8144<NestedConfig8144>;
  path?: ConfigPaths8144;
}

const HeavyComponent8144 = memo(function HeavyComponent8144({ config }: HeavyProps8144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8144.displayName = 'HeavyComponent8144';
export default HeavyComponent8144;
