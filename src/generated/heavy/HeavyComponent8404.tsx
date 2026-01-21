'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8404<T> = T extends (infer U)[]
  ? DeepReadonlyArray8404<U>
  : T extends object
  ? DeepReadonlyObject8404<T>
  : T;

interface DeepReadonlyArray8404<T> extends ReadonlyArray<DeepReadonly8404<T>> {}

type DeepReadonlyObject8404<T> = {
  readonly [P in keyof T]: DeepReadonly8404<T[P]>;
};

type UnionToIntersection8404<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8404<T> = UnionToIntersection8404<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8404<T extends unknown[], V> = [...T, V];

type TuplifyUnion8404<T, L = LastOf8404<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8404<TuplifyUnion8404<Exclude<T, L>>, L>;

type DeepPartial8404<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8404<T[P]> }
  : T;

type Paths8404<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8404<K, Paths8404<T[K], Prev8404[D]>> : never }[keyof T]
  : never;

type Prev8404 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8404<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8404 {
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

type ConfigPaths8404 = Paths8404<NestedConfig8404>;

interface HeavyProps8404 {
  config: DeepPartial8404<NestedConfig8404>;
  path?: ConfigPaths8404;
}

const HeavyComponent8404 = memo(function HeavyComponent8404({ config }: HeavyProps8404) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8404) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8404 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8404: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8404.displayName = 'HeavyComponent8404';
export default HeavyComponent8404;
