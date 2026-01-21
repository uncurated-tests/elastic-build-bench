'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8083<T> = T extends (infer U)[]
  ? DeepReadonlyArray8083<U>
  : T extends object
  ? DeepReadonlyObject8083<T>
  : T;

interface DeepReadonlyArray8083<T> extends ReadonlyArray<DeepReadonly8083<T>> {}

type DeepReadonlyObject8083<T> = {
  readonly [P in keyof T]: DeepReadonly8083<T[P]>;
};

type UnionToIntersection8083<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8083<T> = UnionToIntersection8083<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8083<T extends unknown[], V> = [...T, V];

type TuplifyUnion8083<T, L = LastOf8083<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8083<TuplifyUnion8083<Exclude<T, L>>, L>;

type DeepPartial8083<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8083<T[P]> }
  : T;

type Paths8083<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8083<K, Paths8083<T[K], Prev8083[D]>> : never }[keyof T]
  : never;

type Prev8083 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8083<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8083 {
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

type ConfigPaths8083 = Paths8083<NestedConfig8083>;

interface HeavyProps8083 {
  config: DeepPartial8083<NestedConfig8083>;
  path?: ConfigPaths8083;
}

const HeavyComponent8083 = memo(function HeavyComponent8083({ config }: HeavyProps8083) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8083) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8083 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8083: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8083.displayName = 'HeavyComponent8083';
export default HeavyComponent8083;
