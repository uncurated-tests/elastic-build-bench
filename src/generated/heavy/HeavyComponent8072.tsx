'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8072<T> = T extends (infer U)[]
  ? DeepReadonlyArray8072<U>
  : T extends object
  ? DeepReadonlyObject8072<T>
  : T;

interface DeepReadonlyArray8072<T> extends ReadonlyArray<DeepReadonly8072<T>> {}

type DeepReadonlyObject8072<T> = {
  readonly [P in keyof T]: DeepReadonly8072<T[P]>;
};

type UnionToIntersection8072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8072<T> = UnionToIntersection8072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8072<T extends unknown[], V> = [...T, V];

type TuplifyUnion8072<T, L = LastOf8072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8072<TuplifyUnion8072<Exclude<T, L>>, L>;

type DeepPartial8072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8072<T[P]> }
  : T;

type Paths8072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8072<K, Paths8072<T[K], Prev8072[D]>> : never }[keyof T]
  : never;

type Prev8072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8072 {
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

type ConfigPaths8072 = Paths8072<NestedConfig8072>;

interface HeavyProps8072 {
  config: DeepPartial8072<NestedConfig8072>;
  path?: ConfigPaths8072;
}

const HeavyComponent8072 = memo(function HeavyComponent8072({ config }: HeavyProps8072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8072.displayName = 'HeavyComponent8072';
export default HeavyComponent8072;
