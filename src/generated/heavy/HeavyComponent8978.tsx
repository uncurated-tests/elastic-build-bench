'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8978<T> = T extends (infer U)[]
  ? DeepReadonlyArray8978<U>
  : T extends object
  ? DeepReadonlyObject8978<T>
  : T;

interface DeepReadonlyArray8978<T> extends ReadonlyArray<DeepReadonly8978<T>> {}

type DeepReadonlyObject8978<T> = {
  readonly [P in keyof T]: DeepReadonly8978<T[P]>;
};

type UnionToIntersection8978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8978<T> = UnionToIntersection8978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8978<T extends unknown[], V> = [...T, V];

type TuplifyUnion8978<T, L = LastOf8978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8978<TuplifyUnion8978<Exclude<T, L>>, L>;

type DeepPartial8978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8978<T[P]> }
  : T;

type Paths8978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8978<K, Paths8978<T[K], Prev8978[D]>> : never }[keyof T]
  : never;

type Prev8978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8978 {
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

type ConfigPaths8978 = Paths8978<NestedConfig8978>;

interface HeavyProps8978 {
  config: DeepPartial8978<NestedConfig8978>;
  path?: ConfigPaths8978;
}

const HeavyComponent8978 = memo(function HeavyComponent8978({ config }: HeavyProps8978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8978.displayName = 'HeavyComponent8978';
export default HeavyComponent8978;
