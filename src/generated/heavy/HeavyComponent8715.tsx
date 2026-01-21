'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8715<T> = T extends (infer U)[]
  ? DeepReadonlyArray8715<U>
  : T extends object
  ? DeepReadonlyObject8715<T>
  : T;

interface DeepReadonlyArray8715<T> extends ReadonlyArray<DeepReadonly8715<T>> {}

type DeepReadonlyObject8715<T> = {
  readonly [P in keyof T]: DeepReadonly8715<T[P]>;
};

type UnionToIntersection8715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8715<T> = UnionToIntersection8715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8715<T extends unknown[], V> = [...T, V];

type TuplifyUnion8715<T, L = LastOf8715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8715<TuplifyUnion8715<Exclude<T, L>>, L>;

type DeepPartial8715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8715<T[P]> }
  : T;

type Paths8715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8715<K, Paths8715<T[K], Prev8715[D]>> : never }[keyof T]
  : never;

type Prev8715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8715 {
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

type ConfigPaths8715 = Paths8715<NestedConfig8715>;

interface HeavyProps8715 {
  config: DeepPartial8715<NestedConfig8715>;
  path?: ConfigPaths8715;
}

const HeavyComponent8715 = memo(function HeavyComponent8715({ config }: HeavyProps8715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8715.displayName = 'HeavyComponent8715';
export default HeavyComponent8715;
