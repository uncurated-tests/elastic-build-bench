'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8403<T> = T extends (infer U)[]
  ? DeepReadonlyArray8403<U>
  : T extends object
  ? DeepReadonlyObject8403<T>
  : T;

interface DeepReadonlyArray8403<T> extends ReadonlyArray<DeepReadonly8403<T>> {}

type DeepReadonlyObject8403<T> = {
  readonly [P in keyof T]: DeepReadonly8403<T[P]>;
};

type UnionToIntersection8403<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8403<T> = UnionToIntersection8403<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8403<T extends unknown[], V> = [...T, V];

type TuplifyUnion8403<T, L = LastOf8403<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8403<TuplifyUnion8403<Exclude<T, L>>, L>;

type DeepPartial8403<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8403<T[P]> }
  : T;

type Paths8403<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8403<K, Paths8403<T[K], Prev8403[D]>> : never }[keyof T]
  : never;

type Prev8403 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8403<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8403 {
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

type ConfigPaths8403 = Paths8403<NestedConfig8403>;

interface HeavyProps8403 {
  config: DeepPartial8403<NestedConfig8403>;
  path?: ConfigPaths8403;
}

const HeavyComponent8403 = memo(function HeavyComponent8403({ config }: HeavyProps8403) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8403) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8403 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8403: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8403.displayName = 'HeavyComponent8403';
export default HeavyComponent8403;
