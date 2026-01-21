'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8077<T> = T extends (infer U)[]
  ? DeepReadonlyArray8077<U>
  : T extends object
  ? DeepReadonlyObject8077<T>
  : T;

interface DeepReadonlyArray8077<T> extends ReadonlyArray<DeepReadonly8077<T>> {}

type DeepReadonlyObject8077<T> = {
  readonly [P in keyof T]: DeepReadonly8077<T[P]>;
};

type UnionToIntersection8077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8077<T> = UnionToIntersection8077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8077<T extends unknown[], V> = [...T, V];

type TuplifyUnion8077<T, L = LastOf8077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8077<TuplifyUnion8077<Exclude<T, L>>, L>;

type DeepPartial8077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8077<T[P]> }
  : T;

type Paths8077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8077<K, Paths8077<T[K], Prev8077[D]>> : never }[keyof T]
  : never;

type Prev8077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8077 {
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

type ConfigPaths8077 = Paths8077<NestedConfig8077>;

interface HeavyProps8077 {
  config: DeepPartial8077<NestedConfig8077>;
  path?: ConfigPaths8077;
}

const HeavyComponent8077 = memo(function HeavyComponent8077({ config }: HeavyProps8077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8077.displayName = 'HeavyComponent8077';
export default HeavyComponent8077;
