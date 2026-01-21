'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8950<T> = T extends (infer U)[]
  ? DeepReadonlyArray8950<U>
  : T extends object
  ? DeepReadonlyObject8950<T>
  : T;

interface DeepReadonlyArray8950<T> extends ReadonlyArray<DeepReadonly8950<T>> {}

type DeepReadonlyObject8950<T> = {
  readonly [P in keyof T]: DeepReadonly8950<T[P]>;
};

type UnionToIntersection8950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8950<T> = UnionToIntersection8950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8950<T extends unknown[], V> = [...T, V];

type TuplifyUnion8950<T, L = LastOf8950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8950<TuplifyUnion8950<Exclude<T, L>>, L>;

type DeepPartial8950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8950<T[P]> }
  : T;

type Paths8950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8950<K, Paths8950<T[K], Prev8950[D]>> : never }[keyof T]
  : never;

type Prev8950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8950 {
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

type ConfigPaths8950 = Paths8950<NestedConfig8950>;

interface HeavyProps8950 {
  config: DeepPartial8950<NestedConfig8950>;
  path?: ConfigPaths8950;
}

const HeavyComponent8950 = memo(function HeavyComponent8950({ config }: HeavyProps8950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8950.displayName = 'HeavyComponent8950';
export default HeavyComponent8950;
