'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8106<T> = T extends (infer U)[]
  ? DeepReadonlyArray8106<U>
  : T extends object
  ? DeepReadonlyObject8106<T>
  : T;

interface DeepReadonlyArray8106<T> extends ReadonlyArray<DeepReadonly8106<T>> {}

type DeepReadonlyObject8106<T> = {
  readonly [P in keyof T]: DeepReadonly8106<T[P]>;
};

type UnionToIntersection8106<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8106<T> = UnionToIntersection8106<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8106<T extends unknown[], V> = [...T, V];

type TuplifyUnion8106<T, L = LastOf8106<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8106<TuplifyUnion8106<Exclude<T, L>>, L>;

type DeepPartial8106<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8106<T[P]> }
  : T;

type Paths8106<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8106<K, Paths8106<T[K], Prev8106[D]>> : never }[keyof T]
  : never;

type Prev8106 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8106<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8106 {
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

type ConfigPaths8106 = Paths8106<NestedConfig8106>;

interface HeavyProps8106 {
  config: DeepPartial8106<NestedConfig8106>;
  path?: ConfigPaths8106;
}

const HeavyComponent8106 = memo(function HeavyComponent8106({ config }: HeavyProps8106) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8106) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8106 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8106: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8106.displayName = 'HeavyComponent8106';
export default HeavyComponent8106;
