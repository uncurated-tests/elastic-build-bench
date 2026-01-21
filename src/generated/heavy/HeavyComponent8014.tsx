'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8014<T> = T extends (infer U)[]
  ? DeepReadonlyArray8014<U>
  : T extends object
  ? DeepReadonlyObject8014<T>
  : T;

interface DeepReadonlyArray8014<T> extends ReadonlyArray<DeepReadonly8014<T>> {}

type DeepReadonlyObject8014<T> = {
  readonly [P in keyof T]: DeepReadonly8014<T[P]>;
};

type UnionToIntersection8014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8014<T> = UnionToIntersection8014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8014<T extends unknown[], V> = [...T, V];

type TuplifyUnion8014<T, L = LastOf8014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8014<TuplifyUnion8014<Exclude<T, L>>, L>;

type DeepPartial8014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8014<T[P]> }
  : T;

type Paths8014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8014<K, Paths8014<T[K], Prev8014[D]>> : never }[keyof T]
  : never;

type Prev8014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8014 {
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

type ConfigPaths8014 = Paths8014<NestedConfig8014>;

interface HeavyProps8014 {
  config: DeepPartial8014<NestedConfig8014>;
  path?: ConfigPaths8014;
}

const HeavyComponent8014 = memo(function HeavyComponent8014({ config }: HeavyProps8014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8014.displayName = 'HeavyComponent8014';
export default HeavyComponent8014;
