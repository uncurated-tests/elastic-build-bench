'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8109<T> = T extends (infer U)[]
  ? DeepReadonlyArray8109<U>
  : T extends object
  ? DeepReadonlyObject8109<T>
  : T;

interface DeepReadonlyArray8109<T> extends ReadonlyArray<DeepReadonly8109<T>> {}

type DeepReadonlyObject8109<T> = {
  readonly [P in keyof T]: DeepReadonly8109<T[P]>;
};

type UnionToIntersection8109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8109<T> = UnionToIntersection8109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8109<T extends unknown[], V> = [...T, V];

type TuplifyUnion8109<T, L = LastOf8109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8109<TuplifyUnion8109<Exclude<T, L>>, L>;

type DeepPartial8109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8109<T[P]> }
  : T;

type Paths8109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8109<K, Paths8109<T[K], Prev8109[D]>> : never }[keyof T]
  : never;

type Prev8109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8109 {
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

type ConfigPaths8109 = Paths8109<NestedConfig8109>;

interface HeavyProps8109 {
  config: DeepPartial8109<NestedConfig8109>;
  path?: ConfigPaths8109;
}

const HeavyComponent8109 = memo(function HeavyComponent8109({ config }: HeavyProps8109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8109.displayName = 'HeavyComponent8109';
export default HeavyComponent8109;
