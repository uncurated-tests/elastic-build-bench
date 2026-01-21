'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8137<T> = T extends (infer U)[]
  ? DeepReadonlyArray8137<U>
  : T extends object
  ? DeepReadonlyObject8137<T>
  : T;

interface DeepReadonlyArray8137<T> extends ReadonlyArray<DeepReadonly8137<T>> {}

type DeepReadonlyObject8137<T> = {
  readonly [P in keyof T]: DeepReadonly8137<T[P]>;
};

type UnionToIntersection8137<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8137<T> = UnionToIntersection8137<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8137<T extends unknown[], V> = [...T, V];

type TuplifyUnion8137<T, L = LastOf8137<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8137<TuplifyUnion8137<Exclude<T, L>>, L>;

type DeepPartial8137<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8137<T[P]> }
  : T;

type Paths8137<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8137<K, Paths8137<T[K], Prev8137[D]>> : never }[keyof T]
  : never;

type Prev8137 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8137<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8137 {
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

type ConfigPaths8137 = Paths8137<NestedConfig8137>;

interface HeavyProps8137 {
  config: DeepPartial8137<NestedConfig8137>;
  path?: ConfigPaths8137;
}

const HeavyComponent8137 = memo(function HeavyComponent8137({ config }: HeavyProps8137) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8137) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8137 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8137: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8137.displayName = 'HeavyComponent8137';
export default HeavyComponent8137;
