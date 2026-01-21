'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8036<T> = T extends (infer U)[]
  ? DeepReadonlyArray8036<U>
  : T extends object
  ? DeepReadonlyObject8036<T>
  : T;

interface DeepReadonlyArray8036<T> extends ReadonlyArray<DeepReadonly8036<T>> {}

type DeepReadonlyObject8036<T> = {
  readonly [P in keyof T]: DeepReadonly8036<T[P]>;
};

type UnionToIntersection8036<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8036<T> = UnionToIntersection8036<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8036<T extends unknown[], V> = [...T, V];

type TuplifyUnion8036<T, L = LastOf8036<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8036<TuplifyUnion8036<Exclude<T, L>>, L>;

type DeepPartial8036<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8036<T[P]> }
  : T;

type Paths8036<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8036<K, Paths8036<T[K], Prev8036[D]>> : never }[keyof T]
  : never;

type Prev8036 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8036<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8036 {
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

type ConfigPaths8036 = Paths8036<NestedConfig8036>;

interface HeavyProps8036 {
  config: DeepPartial8036<NestedConfig8036>;
  path?: ConfigPaths8036;
}

const HeavyComponent8036 = memo(function HeavyComponent8036({ config }: HeavyProps8036) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8036) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8036 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8036: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8036.displayName = 'HeavyComponent8036';
export default HeavyComponent8036;
