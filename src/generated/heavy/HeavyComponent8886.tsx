'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8886<T> = T extends (infer U)[]
  ? DeepReadonlyArray8886<U>
  : T extends object
  ? DeepReadonlyObject8886<T>
  : T;

interface DeepReadonlyArray8886<T> extends ReadonlyArray<DeepReadonly8886<T>> {}

type DeepReadonlyObject8886<T> = {
  readonly [P in keyof T]: DeepReadonly8886<T[P]>;
};

type UnionToIntersection8886<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8886<T> = UnionToIntersection8886<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8886<T extends unknown[], V> = [...T, V];

type TuplifyUnion8886<T, L = LastOf8886<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8886<TuplifyUnion8886<Exclude<T, L>>, L>;

type DeepPartial8886<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8886<T[P]> }
  : T;

type Paths8886<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8886<K, Paths8886<T[K], Prev8886[D]>> : never }[keyof T]
  : never;

type Prev8886 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8886<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8886 {
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

type ConfigPaths8886 = Paths8886<NestedConfig8886>;

interface HeavyProps8886 {
  config: DeepPartial8886<NestedConfig8886>;
  path?: ConfigPaths8886;
}

const HeavyComponent8886 = memo(function HeavyComponent8886({ config }: HeavyProps8886) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8886) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8886 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8886: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8886.displayName = 'HeavyComponent8886';
export default HeavyComponent8886;
