'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8725<T> = T extends (infer U)[]
  ? DeepReadonlyArray8725<U>
  : T extends object
  ? DeepReadonlyObject8725<T>
  : T;

interface DeepReadonlyArray8725<T> extends ReadonlyArray<DeepReadonly8725<T>> {}

type DeepReadonlyObject8725<T> = {
  readonly [P in keyof T]: DeepReadonly8725<T[P]>;
};

type UnionToIntersection8725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8725<T> = UnionToIntersection8725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8725<T extends unknown[], V> = [...T, V];

type TuplifyUnion8725<T, L = LastOf8725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8725<TuplifyUnion8725<Exclude<T, L>>, L>;

type DeepPartial8725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8725<T[P]> }
  : T;

type Paths8725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8725<K, Paths8725<T[K], Prev8725[D]>> : never }[keyof T]
  : never;

type Prev8725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8725 {
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

type ConfigPaths8725 = Paths8725<NestedConfig8725>;

interface HeavyProps8725 {
  config: DeepPartial8725<NestedConfig8725>;
  path?: ConfigPaths8725;
}

const HeavyComponent8725 = memo(function HeavyComponent8725({ config }: HeavyProps8725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8725.displayName = 'HeavyComponent8725';
export default HeavyComponent8725;
