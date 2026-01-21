'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8294<T> = T extends (infer U)[]
  ? DeepReadonlyArray8294<U>
  : T extends object
  ? DeepReadonlyObject8294<T>
  : T;

interface DeepReadonlyArray8294<T> extends ReadonlyArray<DeepReadonly8294<T>> {}

type DeepReadonlyObject8294<T> = {
  readonly [P in keyof T]: DeepReadonly8294<T[P]>;
};

type UnionToIntersection8294<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8294<T> = UnionToIntersection8294<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8294<T extends unknown[], V> = [...T, V];

type TuplifyUnion8294<T, L = LastOf8294<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8294<TuplifyUnion8294<Exclude<T, L>>, L>;

type DeepPartial8294<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8294<T[P]> }
  : T;

type Paths8294<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8294<K, Paths8294<T[K], Prev8294[D]>> : never }[keyof T]
  : never;

type Prev8294 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8294<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8294 {
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

type ConfigPaths8294 = Paths8294<NestedConfig8294>;

interface HeavyProps8294 {
  config: DeepPartial8294<NestedConfig8294>;
  path?: ConfigPaths8294;
}

const HeavyComponent8294 = memo(function HeavyComponent8294({ config }: HeavyProps8294) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8294) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8294 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8294: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8294.displayName = 'HeavyComponent8294';
export default HeavyComponent8294;
