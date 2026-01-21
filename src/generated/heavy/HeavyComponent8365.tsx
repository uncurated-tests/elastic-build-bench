'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8365<T> = T extends (infer U)[]
  ? DeepReadonlyArray8365<U>
  : T extends object
  ? DeepReadonlyObject8365<T>
  : T;

interface DeepReadonlyArray8365<T> extends ReadonlyArray<DeepReadonly8365<T>> {}

type DeepReadonlyObject8365<T> = {
  readonly [P in keyof T]: DeepReadonly8365<T[P]>;
};

type UnionToIntersection8365<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8365<T> = UnionToIntersection8365<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8365<T extends unknown[], V> = [...T, V];

type TuplifyUnion8365<T, L = LastOf8365<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8365<TuplifyUnion8365<Exclude<T, L>>, L>;

type DeepPartial8365<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8365<T[P]> }
  : T;

type Paths8365<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8365<K, Paths8365<T[K], Prev8365[D]>> : never }[keyof T]
  : never;

type Prev8365 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8365<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8365 {
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

type ConfigPaths8365 = Paths8365<NestedConfig8365>;

interface HeavyProps8365 {
  config: DeepPartial8365<NestedConfig8365>;
  path?: ConfigPaths8365;
}

const HeavyComponent8365 = memo(function HeavyComponent8365({ config }: HeavyProps8365) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8365) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8365 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8365: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8365.displayName = 'HeavyComponent8365';
export default HeavyComponent8365;
