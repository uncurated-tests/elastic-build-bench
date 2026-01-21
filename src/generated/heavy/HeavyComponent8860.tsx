'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8860<T> = T extends (infer U)[]
  ? DeepReadonlyArray8860<U>
  : T extends object
  ? DeepReadonlyObject8860<T>
  : T;

interface DeepReadonlyArray8860<T> extends ReadonlyArray<DeepReadonly8860<T>> {}

type DeepReadonlyObject8860<T> = {
  readonly [P in keyof T]: DeepReadonly8860<T[P]>;
};

type UnionToIntersection8860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8860<T> = UnionToIntersection8860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8860<T extends unknown[], V> = [...T, V];

type TuplifyUnion8860<T, L = LastOf8860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8860<TuplifyUnion8860<Exclude<T, L>>, L>;

type DeepPartial8860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8860<T[P]> }
  : T;

type Paths8860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8860<K, Paths8860<T[K], Prev8860[D]>> : never }[keyof T]
  : never;

type Prev8860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8860 {
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

type ConfigPaths8860 = Paths8860<NestedConfig8860>;

interface HeavyProps8860 {
  config: DeepPartial8860<NestedConfig8860>;
  path?: ConfigPaths8860;
}

const HeavyComponent8860 = memo(function HeavyComponent8860({ config }: HeavyProps8860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8860.displayName = 'HeavyComponent8860';
export default HeavyComponent8860;
