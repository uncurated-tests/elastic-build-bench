'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly408<T> = T extends (infer U)[]
  ? DeepReadonlyArray408<U>
  : T extends object
  ? DeepReadonlyObject408<T>
  : T;

interface DeepReadonlyArray408<T> extends ReadonlyArray<DeepReadonly408<T>> {}

type DeepReadonlyObject408<T> = {
  readonly [P in keyof T]: DeepReadonly408<T[P]>;
};

type UnionToIntersection408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf408<T> = UnionToIntersection408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push408<T extends unknown[], V> = [...T, V];

type TuplifyUnion408<T, L = LastOf408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push408<TuplifyUnion408<Exclude<T, L>>, L>;

type DeepPartial408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial408<T[P]> }
  : T;

type Paths408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join408<K, Paths408<T[K], Prev408[D]>> : never }[keyof T]
  : never;

type Prev408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig408 {
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

type ConfigPaths408 = Paths408<NestedConfig408>;

interface HeavyProps408 {
  config: DeepPartial408<NestedConfig408>;
  path?: ConfigPaths408;
}

const HeavyComponent408 = memo(function HeavyComponent408({ config }: HeavyProps408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent408.displayName = 'HeavyComponent408';
export default HeavyComponent408;
