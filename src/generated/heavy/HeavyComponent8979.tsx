'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8979<T> = T extends (infer U)[]
  ? DeepReadonlyArray8979<U>
  : T extends object
  ? DeepReadonlyObject8979<T>
  : T;

interface DeepReadonlyArray8979<T> extends ReadonlyArray<DeepReadonly8979<T>> {}

type DeepReadonlyObject8979<T> = {
  readonly [P in keyof T]: DeepReadonly8979<T[P]>;
};

type UnionToIntersection8979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8979<T> = UnionToIntersection8979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8979<T extends unknown[], V> = [...T, V];

type TuplifyUnion8979<T, L = LastOf8979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8979<TuplifyUnion8979<Exclude<T, L>>, L>;

type DeepPartial8979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8979<T[P]> }
  : T;

type Paths8979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8979<K, Paths8979<T[K], Prev8979[D]>> : never }[keyof T]
  : never;

type Prev8979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8979 {
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

type ConfigPaths8979 = Paths8979<NestedConfig8979>;

interface HeavyProps8979 {
  config: DeepPartial8979<NestedConfig8979>;
  path?: ConfigPaths8979;
}

const HeavyComponent8979 = memo(function HeavyComponent8979({ config }: HeavyProps8979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8979.displayName = 'HeavyComponent8979';
export default HeavyComponent8979;
