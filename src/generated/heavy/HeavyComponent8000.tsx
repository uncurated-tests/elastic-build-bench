'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8000<T> = T extends (infer U)[]
  ? DeepReadonlyArray8000<U>
  : T extends object
  ? DeepReadonlyObject8000<T>
  : T;

interface DeepReadonlyArray8000<T> extends ReadonlyArray<DeepReadonly8000<T>> {}

type DeepReadonlyObject8000<T> = {
  readonly [P in keyof T]: DeepReadonly8000<T[P]>;
};

type UnionToIntersection8000<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8000<T> = UnionToIntersection8000<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8000<T extends unknown[], V> = [...T, V];

type TuplifyUnion8000<T, L = LastOf8000<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8000<TuplifyUnion8000<Exclude<T, L>>, L>;

type DeepPartial8000<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8000<T[P]> }
  : T;

type Paths8000<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8000<K, Paths8000<T[K], Prev8000[D]>> : never }[keyof T]
  : never;

type Prev8000 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8000<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8000 {
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

type ConfigPaths8000 = Paths8000<NestedConfig8000>;

interface HeavyProps8000 {
  config: DeepPartial8000<NestedConfig8000>;
  path?: ConfigPaths8000;
}

const HeavyComponent8000 = memo(function HeavyComponent8000({ config }: HeavyProps8000) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8000) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8000 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8000: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8000.displayName = 'HeavyComponent8000';
export default HeavyComponent8000;
