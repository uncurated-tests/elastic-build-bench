'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8466<T> = T extends (infer U)[]
  ? DeepReadonlyArray8466<U>
  : T extends object
  ? DeepReadonlyObject8466<T>
  : T;

interface DeepReadonlyArray8466<T> extends ReadonlyArray<DeepReadonly8466<T>> {}

type DeepReadonlyObject8466<T> = {
  readonly [P in keyof T]: DeepReadonly8466<T[P]>;
};

type UnionToIntersection8466<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8466<T> = UnionToIntersection8466<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8466<T extends unknown[], V> = [...T, V];

type TuplifyUnion8466<T, L = LastOf8466<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8466<TuplifyUnion8466<Exclude<T, L>>, L>;

type DeepPartial8466<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8466<T[P]> }
  : T;

type Paths8466<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8466<K, Paths8466<T[K], Prev8466[D]>> : never }[keyof T]
  : never;

type Prev8466 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8466<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8466 {
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

type ConfigPaths8466 = Paths8466<NestedConfig8466>;

interface HeavyProps8466 {
  config: DeepPartial8466<NestedConfig8466>;
  path?: ConfigPaths8466;
}

const HeavyComponent8466 = memo(function HeavyComponent8466({ config }: HeavyProps8466) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8466) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8466 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8466: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8466.displayName = 'HeavyComponent8466';
export default HeavyComponent8466;
