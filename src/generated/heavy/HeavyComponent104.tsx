'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly104<T> = T extends (infer U)[]
  ? DeepReadonlyArray104<U>
  : T extends object
  ? DeepReadonlyObject104<T>
  : T;

interface DeepReadonlyArray104<T> extends ReadonlyArray<DeepReadonly104<T>> {}

type DeepReadonlyObject104<T> = {
  readonly [P in keyof T]: DeepReadonly104<T[P]>;
};

type UnionToIntersection104<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf104<T> = UnionToIntersection104<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push104<T extends unknown[], V> = [...T, V];

type TuplifyUnion104<T, L = LastOf104<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push104<TuplifyUnion104<Exclude<T, L>>, L>;

type DeepPartial104<T> = T extends object
  ? { [P in keyof T]?: DeepPartial104<T[P]> }
  : T;

type Paths104<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join104<K, Paths104<T[K], Prev104[D]>> : never }[keyof T]
  : never;

type Prev104 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join104<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig104 {
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

type ConfigPaths104 = Paths104<NestedConfig104>;

interface HeavyProps104 {
  config: DeepPartial104<NestedConfig104>;
  path?: ConfigPaths104;
}

const HeavyComponent104 = memo(function HeavyComponent104({ config }: HeavyProps104) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 104) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-104 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H104: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent104.displayName = 'HeavyComponent104';
export default HeavyComponent104;
