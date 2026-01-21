'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8777<T> = T extends (infer U)[]
  ? DeepReadonlyArray8777<U>
  : T extends object
  ? DeepReadonlyObject8777<T>
  : T;

interface DeepReadonlyArray8777<T> extends ReadonlyArray<DeepReadonly8777<T>> {}

type DeepReadonlyObject8777<T> = {
  readonly [P in keyof T]: DeepReadonly8777<T[P]>;
};

type UnionToIntersection8777<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8777<T> = UnionToIntersection8777<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8777<T extends unknown[], V> = [...T, V];

type TuplifyUnion8777<T, L = LastOf8777<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8777<TuplifyUnion8777<Exclude<T, L>>, L>;

type DeepPartial8777<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8777<T[P]> }
  : T;

type Paths8777<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8777<K, Paths8777<T[K], Prev8777[D]>> : never }[keyof T]
  : never;

type Prev8777 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8777<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8777 {
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

type ConfigPaths8777 = Paths8777<NestedConfig8777>;

interface HeavyProps8777 {
  config: DeepPartial8777<NestedConfig8777>;
  path?: ConfigPaths8777;
}

const HeavyComponent8777 = memo(function HeavyComponent8777({ config }: HeavyProps8777) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8777) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8777 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8777: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8777.displayName = 'HeavyComponent8777';
export default HeavyComponent8777;
