'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8062<T> = T extends (infer U)[]
  ? DeepReadonlyArray8062<U>
  : T extends object
  ? DeepReadonlyObject8062<T>
  : T;

interface DeepReadonlyArray8062<T> extends ReadonlyArray<DeepReadonly8062<T>> {}

type DeepReadonlyObject8062<T> = {
  readonly [P in keyof T]: DeepReadonly8062<T[P]>;
};

type UnionToIntersection8062<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8062<T> = UnionToIntersection8062<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8062<T extends unknown[], V> = [...T, V];

type TuplifyUnion8062<T, L = LastOf8062<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8062<TuplifyUnion8062<Exclude<T, L>>, L>;

type DeepPartial8062<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8062<T[P]> }
  : T;

type Paths8062<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8062<K, Paths8062<T[K], Prev8062[D]>> : never }[keyof T]
  : never;

type Prev8062 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8062<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8062 {
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

type ConfigPaths8062 = Paths8062<NestedConfig8062>;

interface HeavyProps8062 {
  config: DeepPartial8062<NestedConfig8062>;
  path?: ConfigPaths8062;
}

const HeavyComponent8062 = memo(function HeavyComponent8062({ config }: HeavyProps8062) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8062) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8062 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8062: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8062.displayName = 'HeavyComponent8062';
export default HeavyComponent8062;
