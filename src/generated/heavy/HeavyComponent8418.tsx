'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8418<T> = T extends (infer U)[]
  ? DeepReadonlyArray8418<U>
  : T extends object
  ? DeepReadonlyObject8418<T>
  : T;

interface DeepReadonlyArray8418<T> extends ReadonlyArray<DeepReadonly8418<T>> {}

type DeepReadonlyObject8418<T> = {
  readonly [P in keyof T]: DeepReadonly8418<T[P]>;
};

type UnionToIntersection8418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8418<T> = UnionToIntersection8418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8418<T extends unknown[], V> = [...T, V];

type TuplifyUnion8418<T, L = LastOf8418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8418<TuplifyUnion8418<Exclude<T, L>>, L>;

type DeepPartial8418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8418<T[P]> }
  : T;

type Paths8418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8418<K, Paths8418<T[K], Prev8418[D]>> : never }[keyof T]
  : never;

type Prev8418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8418 {
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

type ConfigPaths8418 = Paths8418<NestedConfig8418>;

interface HeavyProps8418 {
  config: DeepPartial8418<NestedConfig8418>;
  path?: ConfigPaths8418;
}

const HeavyComponent8418 = memo(function HeavyComponent8418({ config }: HeavyProps8418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8418.displayName = 'HeavyComponent8418';
export default HeavyComponent8418;
