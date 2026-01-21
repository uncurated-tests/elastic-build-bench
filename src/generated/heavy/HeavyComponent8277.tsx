'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8277<T> = T extends (infer U)[]
  ? DeepReadonlyArray8277<U>
  : T extends object
  ? DeepReadonlyObject8277<T>
  : T;

interface DeepReadonlyArray8277<T> extends ReadonlyArray<DeepReadonly8277<T>> {}

type DeepReadonlyObject8277<T> = {
  readonly [P in keyof T]: DeepReadonly8277<T[P]>;
};

type UnionToIntersection8277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8277<T> = UnionToIntersection8277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8277<T extends unknown[], V> = [...T, V];

type TuplifyUnion8277<T, L = LastOf8277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8277<TuplifyUnion8277<Exclude<T, L>>, L>;

type DeepPartial8277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8277<T[P]> }
  : T;

type Paths8277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8277<K, Paths8277<T[K], Prev8277[D]>> : never }[keyof T]
  : never;

type Prev8277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8277 {
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

type ConfigPaths8277 = Paths8277<NestedConfig8277>;

interface HeavyProps8277 {
  config: DeepPartial8277<NestedConfig8277>;
  path?: ConfigPaths8277;
}

const HeavyComponent8277 = memo(function HeavyComponent8277({ config }: HeavyProps8277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8277.displayName = 'HeavyComponent8277';
export default HeavyComponent8277;
