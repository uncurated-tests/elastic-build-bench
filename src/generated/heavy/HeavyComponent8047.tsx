'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8047<T> = T extends (infer U)[]
  ? DeepReadonlyArray8047<U>
  : T extends object
  ? DeepReadonlyObject8047<T>
  : T;

interface DeepReadonlyArray8047<T> extends ReadonlyArray<DeepReadonly8047<T>> {}

type DeepReadonlyObject8047<T> = {
  readonly [P in keyof T]: DeepReadonly8047<T[P]>;
};

type UnionToIntersection8047<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8047<T> = UnionToIntersection8047<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8047<T extends unknown[], V> = [...T, V];

type TuplifyUnion8047<T, L = LastOf8047<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8047<TuplifyUnion8047<Exclude<T, L>>, L>;

type DeepPartial8047<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8047<T[P]> }
  : T;

type Paths8047<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8047<K, Paths8047<T[K], Prev8047[D]>> : never }[keyof T]
  : never;

type Prev8047 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8047<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8047 {
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

type ConfigPaths8047 = Paths8047<NestedConfig8047>;

interface HeavyProps8047 {
  config: DeepPartial8047<NestedConfig8047>;
  path?: ConfigPaths8047;
}

const HeavyComponent8047 = memo(function HeavyComponent8047({ config }: HeavyProps8047) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8047) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8047 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8047: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8047.displayName = 'HeavyComponent8047';
export default HeavyComponent8047;
