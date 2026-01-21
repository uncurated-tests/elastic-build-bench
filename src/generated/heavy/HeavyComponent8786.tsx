'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8786<T> = T extends (infer U)[]
  ? DeepReadonlyArray8786<U>
  : T extends object
  ? DeepReadonlyObject8786<T>
  : T;

interface DeepReadonlyArray8786<T> extends ReadonlyArray<DeepReadonly8786<T>> {}

type DeepReadonlyObject8786<T> = {
  readonly [P in keyof T]: DeepReadonly8786<T[P]>;
};

type UnionToIntersection8786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8786<T> = UnionToIntersection8786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8786<T extends unknown[], V> = [...T, V];

type TuplifyUnion8786<T, L = LastOf8786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8786<TuplifyUnion8786<Exclude<T, L>>, L>;

type DeepPartial8786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8786<T[P]> }
  : T;

type Paths8786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8786<K, Paths8786<T[K], Prev8786[D]>> : never }[keyof T]
  : never;

type Prev8786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8786 {
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

type ConfigPaths8786 = Paths8786<NestedConfig8786>;

interface HeavyProps8786 {
  config: DeepPartial8786<NestedConfig8786>;
  path?: ConfigPaths8786;
}

const HeavyComponent8786 = memo(function HeavyComponent8786({ config }: HeavyProps8786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8786.displayName = 'HeavyComponent8786';
export default HeavyComponent8786;
