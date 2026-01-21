'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8303<T> = T extends (infer U)[]
  ? DeepReadonlyArray8303<U>
  : T extends object
  ? DeepReadonlyObject8303<T>
  : T;

interface DeepReadonlyArray8303<T> extends ReadonlyArray<DeepReadonly8303<T>> {}

type DeepReadonlyObject8303<T> = {
  readonly [P in keyof T]: DeepReadonly8303<T[P]>;
};

type UnionToIntersection8303<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8303<T> = UnionToIntersection8303<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8303<T extends unknown[], V> = [...T, V];

type TuplifyUnion8303<T, L = LastOf8303<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8303<TuplifyUnion8303<Exclude<T, L>>, L>;

type DeepPartial8303<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8303<T[P]> }
  : T;

type Paths8303<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8303<K, Paths8303<T[K], Prev8303[D]>> : never }[keyof T]
  : never;

type Prev8303 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8303<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8303 {
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

type ConfigPaths8303 = Paths8303<NestedConfig8303>;

interface HeavyProps8303 {
  config: DeepPartial8303<NestedConfig8303>;
  path?: ConfigPaths8303;
}

const HeavyComponent8303 = memo(function HeavyComponent8303({ config }: HeavyProps8303) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8303) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8303 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8303: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8303.displayName = 'HeavyComponent8303';
export default HeavyComponent8303;
