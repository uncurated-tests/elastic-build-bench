'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly146<T> = T extends (infer U)[]
  ? DeepReadonlyArray146<U>
  : T extends object
  ? DeepReadonlyObject146<T>
  : T;

interface DeepReadonlyArray146<T> extends ReadonlyArray<DeepReadonly146<T>> {}

type DeepReadonlyObject146<T> = {
  readonly [P in keyof T]: DeepReadonly146<T[P]>;
};

type UnionToIntersection146<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf146<T> = UnionToIntersection146<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push146<T extends unknown[], V> = [...T, V];

type TuplifyUnion146<T, L = LastOf146<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push146<TuplifyUnion146<Exclude<T, L>>, L>;

type DeepPartial146<T> = T extends object
  ? { [P in keyof T]?: DeepPartial146<T[P]> }
  : T;

type Paths146<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join146<K, Paths146<T[K], Prev146[D]>> : never }[keyof T]
  : never;

type Prev146 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join146<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig146 {
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

type ConfigPaths146 = Paths146<NestedConfig146>;

interface HeavyProps146 {
  config: DeepPartial146<NestedConfig146>;
  path?: ConfigPaths146;
}

const HeavyComponent146 = memo(function HeavyComponent146({ config }: HeavyProps146) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 146) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-146 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H146: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent146.displayName = 'HeavyComponent146';
export default HeavyComponent146;
