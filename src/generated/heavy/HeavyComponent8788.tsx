'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8788<T> = T extends (infer U)[]
  ? DeepReadonlyArray8788<U>
  : T extends object
  ? DeepReadonlyObject8788<T>
  : T;

interface DeepReadonlyArray8788<T> extends ReadonlyArray<DeepReadonly8788<T>> {}

type DeepReadonlyObject8788<T> = {
  readonly [P in keyof T]: DeepReadonly8788<T[P]>;
};

type UnionToIntersection8788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8788<T> = UnionToIntersection8788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8788<T extends unknown[], V> = [...T, V];

type TuplifyUnion8788<T, L = LastOf8788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8788<TuplifyUnion8788<Exclude<T, L>>, L>;

type DeepPartial8788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8788<T[P]> }
  : T;

type Paths8788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8788<K, Paths8788<T[K], Prev8788[D]>> : never }[keyof T]
  : never;

type Prev8788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8788 {
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

type ConfigPaths8788 = Paths8788<NestedConfig8788>;

interface HeavyProps8788 {
  config: DeepPartial8788<NestedConfig8788>;
  path?: ConfigPaths8788;
}

const HeavyComponent8788 = memo(function HeavyComponent8788({ config }: HeavyProps8788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8788.displayName = 'HeavyComponent8788';
export default HeavyComponent8788;
