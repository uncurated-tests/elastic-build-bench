'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8081<T> = T extends (infer U)[]
  ? DeepReadonlyArray8081<U>
  : T extends object
  ? DeepReadonlyObject8081<T>
  : T;

interface DeepReadonlyArray8081<T> extends ReadonlyArray<DeepReadonly8081<T>> {}

type DeepReadonlyObject8081<T> = {
  readonly [P in keyof T]: DeepReadonly8081<T[P]>;
};

type UnionToIntersection8081<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8081<T> = UnionToIntersection8081<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8081<T extends unknown[], V> = [...T, V];

type TuplifyUnion8081<T, L = LastOf8081<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8081<TuplifyUnion8081<Exclude<T, L>>, L>;

type DeepPartial8081<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8081<T[P]> }
  : T;

type Paths8081<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8081<K, Paths8081<T[K], Prev8081[D]>> : never }[keyof T]
  : never;

type Prev8081 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8081<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8081 {
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

type ConfigPaths8081 = Paths8081<NestedConfig8081>;

interface HeavyProps8081 {
  config: DeepPartial8081<NestedConfig8081>;
  path?: ConfigPaths8081;
}

const HeavyComponent8081 = memo(function HeavyComponent8081({ config }: HeavyProps8081) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8081) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8081 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8081: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8081.displayName = 'HeavyComponent8081';
export default HeavyComponent8081;
