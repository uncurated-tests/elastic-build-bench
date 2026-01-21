'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8055<T> = T extends (infer U)[]
  ? DeepReadonlyArray8055<U>
  : T extends object
  ? DeepReadonlyObject8055<T>
  : T;

interface DeepReadonlyArray8055<T> extends ReadonlyArray<DeepReadonly8055<T>> {}

type DeepReadonlyObject8055<T> = {
  readonly [P in keyof T]: DeepReadonly8055<T[P]>;
};

type UnionToIntersection8055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8055<T> = UnionToIntersection8055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8055<T extends unknown[], V> = [...T, V];

type TuplifyUnion8055<T, L = LastOf8055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8055<TuplifyUnion8055<Exclude<T, L>>, L>;

type DeepPartial8055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8055<T[P]> }
  : T;

type Paths8055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8055<K, Paths8055<T[K], Prev8055[D]>> : never }[keyof T]
  : never;

type Prev8055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8055 {
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

type ConfigPaths8055 = Paths8055<NestedConfig8055>;

interface HeavyProps8055 {
  config: DeepPartial8055<NestedConfig8055>;
  path?: ConfigPaths8055;
}

const HeavyComponent8055 = memo(function HeavyComponent8055({ config }: HeavyProps8055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8055.displayName = 'HeavyComponent8055';
export default HeavyComponent8055;
