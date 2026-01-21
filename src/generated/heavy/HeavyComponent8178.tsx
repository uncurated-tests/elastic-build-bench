'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8178<T> = T extends (infer U)[]
  ? DeepReadonlyArray8178<U>
  : T extends object
  ? DeepReadonlyObject8178<T>
  : T;

interface DeepReadonlyArray8178<T> extends ReadonlyArray<DeepReadonly8178<T>> {}

type DeepReadonlyObject8178<T> = {
  readonly [P in keyof T]: DeepReadonly8178<T[P]>;
};

type UnionToIntersection8178<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8178<T> = UnionToIntersection8178<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8178<T extends unknown[], V> = [...T, V];

type TuplifyUnion8178<T, L = LastOf8178<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8178<TuplifyUnion8178<Exclude<T, L>>, L>;

type DeepPartial8178<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8178<T[P]> }
  : T;

type Paths8178<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8178<K, Paths8178<T[K], Prev8178[D]>> : never }[keyof T]
  : never;

type Prev8178 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8178<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8178 {
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

type ConfigPaths8178 = Paths8178<NestedConfig8178>;

interface HeavyProps8178 {
  config: DeepPartial8178<NestedConfig8178>;
  path?: ConfigPaths8178;
}

const HeavyComponent8178 = memo(function HeavyComponent8178({ config }: HeavyProps8178) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8178) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8178 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8178: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8178.displayName = 'HeavyComponent8178';
export default HeavyComponent8178;
