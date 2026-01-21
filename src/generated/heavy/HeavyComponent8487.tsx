'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8487<T> = T extends (infer U)[]
  ? DeepReadonlyArray8487<U>
  : T extends object
  ? DeepReadonlyObject8487<T>
  : T;

interface DeepReadonlyArray8487<T> extends ReadonlyArray<DeepReadonly8487<T>> {}

type DeepReadonlyObject8487<T> = {
  readonly [P in keyof T]: DeepReadonly8487<T[P]>;
};

type UnionToIntersection8487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8487<T> = UnionToIntersection8487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8487<T extends unknown[], V> = [...T, V];

type TuplifyUnion8487<T, L = LastOf8487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8487<TuplifyUnion8487<Exclude<T, L>>, L>;

type DeepPartial8487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8487<T[P]> }
  : T;

type Paths8487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8487<K, Paths8487<T[K], Prev8487[D]>> : never }[keyof T]
  : never;

type Prev8487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8487 {
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

type ConfigPaths8487 = Paths8487<NestedConfig8487>;

interface HeavyProps8487 {
  config: DeepPartial8487<NestedConfig8487>;
  path?: ConfigPaths8487;
}

const HeavyComponent8487 = memo(function HeavyComponent8487({ config }: HeavyProps8487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8487.displayName = 'HeavyComponent8487';
export default HeavyComponent8487;
