'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8897<T> = T extends (infer U)[]
  ? DeepReadonlyArray8897<U>
  : T extends object
  ? DeepReadonlyObject8897<T>
  : T;

interface DeepReadonlyArray8897<T> extends ReadonlyArray<DeepReadonly8897<T>> {}

type DeepReadonlyObject8897<T> = {
  readonly [P in keyof T]: DeepReadonly8897<T[P]>;
};

type UnionToIntersection8897<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8897<T> = UnionToIntersection8897<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8897<T extends unknown[], V> = [...T, V];

type TuplifyUnion8897<T, L = LastOf8897<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8897<TuplifyUnion8897<Exclude<T, L>>, L>;

type DeepPartial8897<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8897<T[P]> }
  : T;

type Paths8897<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8897<K, Paths8897<T[K], Prev8897[D]>> : never }[keyof T]
  : never;

type Prev8897 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8897<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8897 {
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

type ConfigPaths8897 = Paths8897<NestedConfig8897>;

interface HeavyProps8897 {
  config: DeepPartial8897<NestedConfig8897>;
  path?: ConfigPaths8897;
}

const HeavyComponent8897 = memo(function HeavyComponent8897({ config }: HeavyProps8897) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8897) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8897 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8897: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8897.displayName = 'HeavyComponent8897';
export default HeavyComponent8897;
