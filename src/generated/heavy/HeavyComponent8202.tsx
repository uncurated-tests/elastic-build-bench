'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8202<T> = T extends (infer U)[]
  ? DeepReadonlyArray8202<U>
  : T extends object
  ? DeepReadonlyObject8202<T>
  : T;

interface DeepReadonlyArray8202<T> extends ReadonlyArray<DeepReadonly8202<T>> {}

type DeepReadonlyObject8202<T> = {
  readonly [P in keyof T]: DeepReadonly8202<T[P]>;
};

type UnionToIntersection8202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8202<T> = UnionToIntersection8202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8202<T extends unknown[], V> = [...T, V];

type TuplifyUnion8202<T, L = LastOf8202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8202<TuplifyUnion8202<Exclude<T, L>>, L>;

type DeepPartial8202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8202<T[P]> }
  : T;

type Paths8202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8202<K, Paths8202<T[K], Prev8202[D]>> : never }[keyof T]
  : never;

type Prev8202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8202 {
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

type ConfigPaths8202 = Paths8202<NestedConfig8202>;

interface HeavyProps8202 {
  config: DeepPartial8202<NestedConfig8202>;
  path?: ConfigPaths8202;
}

const HeavyComponent8202 = memo(function HeavyComponent8202({ config }: HeavyProps8202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8202.displayName = 'HeavyComponent8202';
export default HeavyComponent8202;
