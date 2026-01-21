'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14408<T> = T extends (infer U)[]
  ? DeepReadonlyArray14408<U>
  : T extends object
  ? DeepReadonlyObject14408<T>
  : T;

interface DeepReadonlyArray14408<T> extends ReadonlyArray<DeepReadonly14408<T>> {}

type DeepReadonlyObject14408<T> = {
  readonly [P in keyof T]: DeepReadonly14408<T[P]>;
};

type UnionToIntersection14408<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14408<T> = UnionToIntersection14408<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14408<T extends unknown[], V> = [...T, V];

type TuplifyUnion14408<T, L = LastOf14408<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14408<TuplifyUnion14408<Exclude<T, L>>, L>;

type DeepPartial14408<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14408<T[P]> }
  : T;

type Paths14408<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14408<K, Paths14408<T[K], Prev14408[D]>> : never }[keyof T]
  : never;

type Prev14408 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14408<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14408 {
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

type ConfigPaths14408 = Paths14408<NestedConfig14408>;

interface HeavyProps14408 {
  config: DeepPartial14408<NestedConfig14408>;
  path?: ConfigPaths14408;
}

const HeavyComponent14408 = memo(function HeavyComponent14408({ config }: HeavyProps14408) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14408) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14408 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14408: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14408.displayName = 'HeavyComponent14408';
export default HeavyComponent14408;
