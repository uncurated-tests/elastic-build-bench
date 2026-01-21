'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8008<T> = T extends (infer U)[]
  ? DeepReadonlyArray8008<U>
  : T extends object
  ? DeepReadonlyObject8008<T>
  : T;

interface DeepReadonlyArray8008<T> extends ReadonlyArray<DeepReadonly8008<T>> {}

type DeepReadonlyObject8008<T> = {
  readonly [P in keyof T]: DeepReadonly8008<T[P]>;
};

type UnionToIntersection8008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8008<T> = UnionToIntersection8008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8008<T extends unknown[], V> = [...T, V];

type TuplifyUnion8008<T, L = LastOf8008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8008<TuplifyUnion8008<Exclude<T, L>>, L>;

type DeepPartial8008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8008<T[P]> }
  : T;

type Paths8008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8008<K, Paths8008<T[K], Prev8008[D]>> : never }[keyof T]
  : never;

type Prev8008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8008 {
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

type ConfigPaths8008 = Paths8008<NestedConfig8008>;

interface HeavyProps8008 {
  config: DeepPartial8008<NestedConfig8008>;
  path?: ConfigPaths8008;
}

const HeavyComponent8008 = memo(function HeavyComponent8008({ config }: HeavyProps8008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8008.displayName = 'HeavyComponent8008';
export default HeavyComponent8008;
