'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8251<T> = T extends (infer U)[]
  ? DeepReadonlyArray8251<U>
  : T extends object
  ? DeepReadonlyObject8251<T>
  : T;

interface DeepReadonlyArray8251<T> extends ReadonlyArray<DeepReadonly8251<T>> {}

type DeepReadonlyObject8251<T> = {
  readonly [P in keyof T]: DeepReadonly8251<T[P]>;
};

type UnionToIntersection8251<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8251<T> = UnionToIntersection8251<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8251<T extends unknown[], V> = [...T, V];

type TuplifyUnion8251<T, L = LastOf8251<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8251<TuplifyUnion8251<Exclude<T, L>>, L>;

type DeepPartial8251<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8251<T[P]> }
  : T;

type Paths8251<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8251<K, Paths8251<T[K], Prev8251[D]>> : never }[keyof T]
  : never;

type Prev8251 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8251<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8251 {
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

type ConfigPaths8251 = Paths8251<NestedConfig8251>;

interface HeavyProps8251 {
  config: DeepPartial8251<NestedConfig8251>;
  path?: ConfigPaths8251;
}

const HeavyComponent8251 = memo(function HeavyComponent8251({ config }: HeavyProps8251) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8251) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8251 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8251: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8251.displayName = 'HeavyComponent8251';
export default HeavyComponent8251;
