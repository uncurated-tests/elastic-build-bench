'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8255<T> = T extends (infer U)[]
  ? DeepReadonlyArray8255<U>
  : T extends object
  ? DeepReadonlyObject8255<T>
  : T;

interface DeepReadonlyArray8255<T> extends ReadonlyArray<DeepReadonly8255<T>> {}

type DeepReadonlyObject8255<T> = {
  readonly [P in keyof T]: DeepReadonly8255<T[P]>;
};

type UnionToIntersection8255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8255<T> = UnionToIntersection8255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8255<T extends unknown[], V> = [...T, V];

type TuplifyUnion8255<T, L = LastOf8255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8255<TuplifyUnion8255<Exclude<T, L>>, L>;

type DeepPartial8255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8255<T[P]> }
  : T;

type Paths8255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8255<K, Paths8255<T[K], Prev8255[D]>> : never }[keyof T]
  : never;

type Prev8255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8255 {
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

type ConfigPaths8255 = Paths8255<NestedConfig8255>;

interface HeavyProps8255 {
  config: DeepPartial8255<NestedConfig8255>;
  path?: ConfigPaths8255;
}

const HeavyComponent8255 = memo(function HeavyComponent8255({ config }: HeavyProps8255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8255.displayName = 'HeavyComponent8255';
export default HeavyComponent8255;
