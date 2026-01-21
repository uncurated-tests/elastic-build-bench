'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8411<T> = T extends (infer U)[]
  ? DeepReadonlyArray8411<U>
  : T extends object
  ? DeepReadonlyObject8411<T>
  : T;

interface DeepReadonlyArray8411<T> extends ReadonlyArray<DeepReadonly8411<T>> {}

type DeepReadonlyObject8411<T> = {
  readonly [P in keyof T]: DeepReadonly8411<T[P]>;
};

type UnionToIntersection8411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8411<T> = UnionToIntersection8411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8411<T extends unknown[], V> = [...T, V];

type TuplifyUnion8411<T, L = LastOf8411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8411<TuplifyUnion8411<Exclude<T, L>>, L>;

type DeepPartial8411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8411<T[P]> }
  : T;

type Paths8411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8411<K, Paths8411<T[K], Prev8411[D]>> : never }[keyof T]
  : never;

type Prev8411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8411 {
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

type ConfigPaths8411 = Paths8411<NestedConfig8411>;

interface HeavyProps8411 {
  config: DeepPartial8411<NestedConfig8411>;
  path?: ConfigPaths8411;
}

const HeavyComponent8411 = memo(function HeavyComponent8411({ config }: HeavyProps8411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8411.displayName = 'HeavyComponent8411';
export default HeavyComponent8411;
