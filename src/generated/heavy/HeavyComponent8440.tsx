'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8440<T> = T extends (infer U)[]
  ? DeepReadonlyArray8440<U>
  : T extends object
  ? DeepReadonlyObject8440<T>
  : T;

interface DeepReadonlyArray8440<T> extends ReadonlyArray<DeepReadonly8440<T>> {}

type DeepReadonlyObject8440<T> = {
  readonly [P in keyof T]: DeepReadonly8440<T[P]>;
};

type UnionToIntersection8440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8440<T> = UnionToIntersection8440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8440<T extends unknown[], V> = [...T, V];

type TuplifyUnion8440<T, L = LastOf8440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8440<TuplifyUnion8440<Exclude<T, L>>, L>;

type DeepPartial8440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8440<T[P]> }
  : T;

type Paths8440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8440<K, Paths8440<T[K], Prev8440[D]>> : never }[keyof T]
  : never;

type Prev8440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8440 {
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

type ConfigPaths8440 = Paths8440<NestedConfig8440>;

interface HeavyProps8440 {
  config: DeepPartial8440<NestedConfig8440>;
  path?: ConfigPaths8440;
}

const HeavyComponent8440 = memo(function HeavyComponent8440({ config }: HeavyProps8440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8440.displayName = 'HeavyComponent8440';
export default HeavyComponent8440;
