'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8711<T> = T extends (infer U)[]
  ? DeepReadonlyArray8711<U>
  : T extends object
  ? DeepReadonlyObject8711<T>
  : T;

interface DeepReadonlyArray8711<T> extends ReadonlyArray<DeepReadonly8711<T>> {}

type DeepReadonlyObject8711<T> = {
  readonly [P in keyof T]: DeepReadonly8711<T[P]>;
};

type UnionToIntersection8711<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8711<T> = UnionToIntersection8711<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8711<T extends unknown[], V> = [...T, V];

type TuplifyUnion8711<T, L = LastOf8711<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8711<TuplifyUnion8711<Exclude<T, L>>, L>;

type DeepPartial8711<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8711<T[P]> }
  : T;

type Paths8711<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8711<K, Paths8711<T[K], Prev8711[D]>> : never }[keyof T]
  : never;

type Prev8711 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8711<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8711 {
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

type ConfigPaths8711 = Paths8711<NestedConfig8711>;

interface HeavyProps8711 {
  config: DeepPartial8711<NestedConfig8711>;
  path?: ConfigPaths8711;
}

const HeavyComponent8711 = memo(function HeavyComponent8711({ config }: HeavyProps8711) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8711) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8711 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8711: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8711.displayName = 'HeavyComponent8711';
export default HeavyComponent8711;
