'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8171<T> = T extends (infer U)[]
  ? DeepReadonlyArray8171<U>
  : T extends object
  ? DeepReadonlyObject8171<T>
  : T;

interface DeepReadonlyArray8171<T> extends ReadonlyArray<DeepReadonly8171<T>> {}

type DeepReadonlyObject8171<T> = {
  readonly [P in keyof T]: DeepReadonly8171<T[P]>;
};

type UnionToIntersection8171<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8171<T> = UnionToIntersection8171<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8171<T extends unknown[], V> = [...T, V];

type TuplifyUnion8171<T, L = LastOf8171<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8171<TuplifyUnion8171<Exclude<T, L>>, L>;

type DeepPartial8171<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8171<T[P]> }
  : T;

type Paths8171<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8171<K, Paths8171<T[K], Prev8171[D]>> : never }[keyof T]
  : never;

type Prev8171 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8171<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8171 {
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

type ConfigPaths8171 = Paths8171<NestedConfig8171>;

interface HeavyProps8171 {
  config: DeepPartial8171<NestedConfig8171>;
  path?: ConfigPaths8171;
}

const HeavyComponent8171 = memo(function HeavyComponent8171({ config }: HeavyProps8171) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8171) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8171 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8171: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8171.displayName = 'HeavyComponent8171';
export default HeavyComponent8171;
