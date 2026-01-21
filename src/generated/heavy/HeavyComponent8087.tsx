'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8087<T> = T extends (infer U)[]
  ? DeepReadonlyArray8087<U>
  : T extends object
  ? DeepReadonlyObject8087<T>
  : T;

interface DeepReadonlyArray8087<T> extends ReadonlyArray<DeepReadonly8087<T>> {}

type DeepReadonlyObject8087<T> = {
  readonly [P in keyof T]: DeepReadonly8087<T[P]>;
};

type UnionToIntersection8087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8087<T> = UnionToIntersection8087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8087<T extends unknown[], V> = [...T, V];

type TuplifyUnion8087<T, L = LastOf8087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8087<TuplifyUnion8087<Exclude<T, L>>, L>;

type DeepPartial8087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8087<T[P]> }
  : T;

type Paths8087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8087<K, Paths8087<T[K], Prev8087[D]>> : never }[keyof T]
  : never;

type Prev8087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8087 {
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

type ConfigPaths8087 = Paths8087<NestedConfig8087>;

interface HeavyProps8087 {
  config: DeepPartial8087<NestedConfig8087>;
  path?: ConfigPaths8087;
}

const HeavyComponent8087 = memo(function HeavyComponent8087({ config }: HeavyProps8087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8087.displayName = 'HeavyComponent8087';
export default HeavyComponent8087;
