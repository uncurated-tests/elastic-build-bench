'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8794<T> = T extends (infer U)[]
  ? DeepReadonlyArray8794<U>
  : T extends object
  ? DeepReadonlyObject8794<T>
  : T;

interface DeepReadonlyArray8794<T> extends ReadonlyArray<DeepReadonly8794<T>> {}

type DeepReadonlyObject8794<T> = {
  readonly [P in keyof T]: DeepReadonly8794<T[P]>;
};

type UnionToIntersection8794<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8794<T> = UnionToIntersection8794<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8794<T extends unknown[], V> = [...T, V];

type TuplifyUnion8794<T, L = LastOf8794<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8794<TuplifyUnion8794<Exclude<T, L>>, L>;

type DeepPartial8794<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8794<T[P]> }
  : T;

type Paths8794<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8794<K, Paths8794<T[K], Prev8794[D]>> : never }[keyof T]
  : never;

type Prev8794 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8794<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8794 {
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

type ConfigPaths8794 = Paths8794<NestedConfig8794>;

interface HeavyProps8794 {
  config: DeepPartial8794<NestedConfig8794>;
  path?: ConfigPaths8794;
}

const HeavyComponent8794 = memo(function HeavyComponent8794({ config }: HeavyProps8794) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8794) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8794 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8794: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8794.displayName = 'HeavyComponent8794';
export default HeavyComponent8794;
