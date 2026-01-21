'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8651<T> = T extends (infer U)[]
  ? DeepReadonlyArray8651<U>
  : T extends object
  ? DeepReadonlyObject8651<T>
  : T;

interface DeepReadonlyArray8651<T> extends ReadonlyArray<DeepReadonly8651<T>> {}

type DeepReadonlyObject8651<T> = {
  readonly [P in keyof T]: DeepReadonly8651<T[P]>;
};

type UnionToIntersection8651<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8651<T> = UnionToIntersection8651<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8651<T extends unknown[], V> = [...T, V];

type TuplifyUnion8651<T, L = LastOf8651<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8651<TuplifyUnion8651<Exclude<T, L>>, L>;

type DeepPartial8651<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8651<T[P]> }
  : T;

type Paths8651<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8651<K, Paths8651<T[K], Prev8651[D]>> : never }[keyof T]
  : never;

type Prev8651 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8651<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8651 {
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

type ConfigPaths8651 = Paths8651<NestedConfig8651>;

interface HeavyProps8651 {
  config: DeepPartial8651<NestedConfig8651>;
  path?: ConfigPaths8651;
}

const HeavyComponent8651 = memo(function HeavyComponent8651({ config }: HeavyProps8651) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8651) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8651 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8651: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8651.displayName = 'HeavyComponent8651';
export default HeavyComponent8651;
