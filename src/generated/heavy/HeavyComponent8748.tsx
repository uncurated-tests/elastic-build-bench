'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8748<T> = T extends (infer U)[]
  ? DeepReadonlyArray8748<U>
  : T extends object
  ? DeepReadonlyObject8748<T>
  : T;

interface DeepReadonlyArray8748<T> extends ReadonlyArray<DeepReadonly8748<T>> {}

type DeepReadonlyObject8748<T> = {
  readonly [P in keyof T]: DeepReadonly8748<T[P]>;
};

type UnionToIntersection8748<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8748<T> = UnionToIntersection8748<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8748<T extends unknown[], V> = [...T, V];

type TuplifyUnion8748<T, L = LastOf8748<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8748<TuplifyUnion8748<Exclude<T, L>>, L>;

type DeepPartial8748<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8748<T[P]> }
  : T;

type Paths8748<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8748<K, Paths8748<T[K], Prev8748[D]>> : never }[keyof T]
  : never;

type Prev8748 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8748<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8748 {
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

type ConfigPaths8748 = Paths8748<NestedConfig8748>;

interface HeavyProps8748 {
  config: DeepPartial8748<NestedConfig8748>;
  path?: ConfigPaths8748;
}

const HeavyComponent8748 = memo(function HeavyComponent8748({ config }: HeavyProps8748) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8748) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8748 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8748: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8748.displayName = 'HeavyComponent8748';
export default HeavyComponent8748;
