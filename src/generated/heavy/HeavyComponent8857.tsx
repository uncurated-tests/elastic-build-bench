'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8857<T> = T extends (infer U)[]
  ? DeepReadonlyArray8857<U>
  : T extends object
  ? DeepReadonlyObject8857<T>
  : T;

interface DeepReadonlyArray8857<T> extends ReadonlyArray<DeepReadonly8857<T>> {}

type DeepReadonlyObject8857<T> = {
  readonly [P in keyof T]: DeepReadonly8857<T[P]>;
};

type UnionToIntersection8857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8857<T> = UnionToIntersection8857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8857<T extends unknown[], V> = [...T, V];

type TuplifyUnion8857<T, L = LastOf8857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8857<TuplifyUnion8857<Exclude<T, L>>, L>;

type DeepPartial8857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8857<T[P]> }
  : T;

type Paths8857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8857<K, Paths8857<T[K], Prev8857[D]>> : never }[keyof T]
  : never;

type Prev8857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8857 {
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

type ConfigPaths8857 = Paths8857<NestedConfig8857>;

interface HeavyProps8857 {
  config: DeepPartial8857<NestedConfig8857>;
  path?: ConfigPaths8857;
}

const HeavyComponent8857 = memo(function HeavyComponent8857({ config }: HeavyProps8857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8857.displayName = 'HeavyComponent8857';
export default HeavyComponent8857;
