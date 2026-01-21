'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8028<T> = T extends (infer U)[]
  ? DeepReadonlyArray8028<U>
  : T extends object
  ? DeepReadonlyObject8028<T>
  : T;

interface DeepReadonlyArray8028<T> extends ReadonlyArray<DeepReadonly8028<T>> {}

type DeepReadonlyObject8028<T> = {
  readonly [P in keyof T]: DeepReadonly8028<T[P]>;
};

type UnionToIntersection8028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8028<T> = UnionToIntersection8028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8028<T extends unknown[], V> = [...T, V];

type TuplifyUnion8028<T, L = LastOf8028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8028<TuplifyUnion8028<Exclude<T, L>>, L>;

type DeepPartial8028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8028<T[P]> }
  : T;

type Paths8028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8028<K, Paths8028<T[K], Prev8028[D]>> : never }[keyof T]
  : never;

type Prev8028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8028 {
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

type ConfigPaths8028 = Paths8028<NestedConfig8028>;

interface HeavyProps8028 {
  config: DeepPartial8028<NestedConfig8028>;
  path?: ConfigPaths8028;
}

const HeavyComponent8028 = memo(function HeavyComponent8028({ config }: HeavyProps8028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8028.displayName = 'HeavyComponent8028';
export default HeavyComponent8028;
