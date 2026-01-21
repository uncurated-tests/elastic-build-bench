'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8955<T> = T extends (infer U)[]
  ? DeepReadonlyArray8955<U>
  : T extends object
  ? DeepReadonlyObject8955<T>
  : T;

interface DeepReadonlyArray8955<T> extends ReadonlyArray<DeepReadonly8955<T>> {}

type DeepReadonlyObject8955<T> = {
  readonly [P in keyof T]: DeepReadonly8955<T[P]>;
};

type UnionToIntersection8955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8955<T> = UnionToIntersection8955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8955<T extends unknown[], V> = [...T, V];

type TuplifyUnion8955<T, L = LastOf8955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8955<TuplifyUnion8955<Exclude<T, L>>, L>;

type DeepPartial8955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8955<T[P]> }
  : T;

type Paths8955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8955<K, Paths8955<T[K], Prev8955[D]>> : never }[keyof T]
  : never;

type Prev8955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8955 {
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

type ConfigPaths8955 = Paths8955<NestedConfig8955>;

interface HeavyProps8955 {
  config: DeepPartial8955<NestedConfig8955>;
  path?: ConfigPaths8955;
}

const HeavyComponent8955 = memo(function HeavyComponent8955({ config }: HeavyProps8955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8955.displayName = 'HeavyComponent8955';
export default HeavyComponent8955;
