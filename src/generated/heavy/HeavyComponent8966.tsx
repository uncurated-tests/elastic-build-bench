'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8966<T> = T extends (infer U)[]
  ? DeepReadonlyArray8966<U>
  : T extends object
  ? DeepReadonlyObject8966<T>
  : T;

interface DeepReadonlyArray8966<T> extends ReadonlyArray<DeepReadonly8966<T>> {}

type DeepReadonlyObject8966<T> = {
  readonly [P in keyof T]: DeepReadonly8966<T[P]>;
};

type UnionToIntersection8966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8966<T> = UnionToIntersection8966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8966<T extends unknown[], V> = [...T, V];

type TuplifyUnion8966<T, L = LastOf8966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8966<TuplifyUnion8966<Exclude<T, L>>, L>;

type DeepPartial8966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8966<T[P]> }
  : T;

type Paths8966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8966<K, Paths8966<T[K], Prev8966[D]>> : never }[keyof T]
  : never;

type Prev8966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8966 {
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

type ConfigPaths8966 = Paths8966<NestedConfig8966>;

interface HeavyProps8966 {
  config: DeepPartial8966<NestedConfig8966>;
  path?: ConfigPaths8966;
}

const HeavyComponent8966 = memo(function HeavyComponent8966({ config }: HeavyProps8966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8966.displayName = 'HeavyComponent8966';
export default HeavyComponent8966;
