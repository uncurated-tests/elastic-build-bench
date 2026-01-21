'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8720<T> = T extends (infer U)[]
  ? DeepReadonlyArray8720<U>
  : T extends object
  ? DeepReadonlyObject8720<T>
  : T;

interface DeepReadonlyArray8720<T> extends ReadonlyArray<DeepReadonly8720<T>> {}

type DeepReadonlyObject8720<T> = {
  readonly [P in keyof T]: DeepReadonly8720<T[P]>;
};

type UnionToIntersection8720<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8720<T> = UnionToIntersection8720<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8720<T extends unknown[], V> = [...T, V];

type TuplifyUnion8720<T, L = LastOf8720<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8720<TuplifyUnion8720<Exclude<T, L>>, L>;

type DeepPartial8720<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8720<T[P]> }
  : T;

type Paths8720<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8720<K, Paths8720<T[K], Prev8720[D]>> : never }[keyof T]
  : never;

type Prev8720 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8720<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8720 {
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

type ConfigPaths8720 = Paths8720<NestedConfig8720>;

interface HeavyProps8720 {
  config: DeepPartial8720<NestedConfig8720>;
  path?: ConfigPaths8720;
}

const HeavyComponent8720 = memo(function HeavyComponent8720({ config }: HeavyProps8720) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8720) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8720 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8720: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8720.displayName = 'HeavyComponent8720';
export default HeavyComponent8720;
