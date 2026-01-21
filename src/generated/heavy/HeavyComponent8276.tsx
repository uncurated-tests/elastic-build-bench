'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8276<T> = T extends (infer U)[]
  ? DeepReadonlyArray8276<U>
  : T extends object
  ? DeepReadonlyObject8276<T>
  : T;

interface DeepReadonlyArray8276<T> extends ReadonlyArray<DeepReadonly8276<T>> {}

type DeepReadonlyObject8276<T> = {
  readonly [P in keyof T]: DeepReadonly8276<T[P]>;
};

type UnionToIntersection8276<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8276<T> = UnionToIntersection8276<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8276<T extends unknown[], V> = [...T, V];

type TuplifyUnion8276<T, L = LastOf8276<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8276<TuplifyUnion8276<Exclude<T, L>>, L>;

type DeepPartial8276<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8276<T[P]> }
  : T;

type Paths8276<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8276<K, Paths8276<T[K], Prev8276[D]>> : never }[keyof T]
  : never;

type Prev8276 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8276<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8276 {
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

type ConfigPaths8276 = Paths8276<NestedConfig8276>;

interface HeavyProps8276 {
  config: DeepPartial8276<NestedConfig8276>;
  path?: ConfigPaths8276;
}

const HeavyComponent8276 = memo(function HeavyComponent8276({ config }: HeavyProps8276) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8276) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8276 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8276: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8276.displayName = 'HeavyComponent8276';
export default HeavyComponent8276;
