'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8875<T> = T extends (infer U)[]
  ? DeepReadonlyArray8875<U>
  : T extends object
  ? DeepReadonlyObject8875<T>
  : T;

interface DeepReadonlyArray8875<T> extends ReadonlyArray<DeepReadonly8875<T>> {}

type DeepReadonlyObject8875<T> = {
  readonly [P in keyof T]: DeepReadonly8875<T[P]>;
};

type UnionToIntersection8875<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8875<T> = UnionToIntersection8875<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8875<T extends unknown[], V> = [...T, V];

type TuplifyUnion8875<T, L = LastOf8875<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8875<TuplifyUnion8875<Exclude<T, L>>, L>;

type DeepPartial8875<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8875<T[P]> }
  : T;

type Paths8875<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8875<K, Paths8875<T[K], Prev8875[D]>> : never }[keyof T]
  : never;

type Prev8875 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8875<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8875 {
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

type ConfigPaths8875 = Paths8875<NestedConfig8875>;

interface HeavyProps8875 {
  config: DeepPartial8875<NestedConfig8875>;
  path?: ConfigPaths8875;
}

const HeavyComponent8875 = memo(function HeavyComponent8875({ config }: HeavyProps8875) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8875) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8875 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8875: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8875.displayName = 'HeavyComponent8875';
export default HeavyComponent8875;
