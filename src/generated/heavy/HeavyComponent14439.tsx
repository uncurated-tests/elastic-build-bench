'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14439<T> = T extends (infer U)[]
  ? DeepReadonlyArray14439<U>
  : T extends object
  ? DeepReadonlyObject14439<T>
  : T;

interface DeepReadonlyArray14439<T> extends ReadonlyArray<DeepReadonly14439<T>> {}

type DeepReadonlyObject14439<T> = {
  readonly [P in keyof T]: DeepReadonly14439<T[P]>;
};

type UnionToIntersection14439<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14439<T> = UnionToIntersection14439<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14439<T extends unknown[], V> = [...T, V];

type TuplifyUnion14439<T, L = LastOf14439<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14439<TuplifyUnion14439<Exclude<T, L>>, L>;

type DeepPartial14439<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14439<T[P]> }
  : T;

type Paths14439<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14439<K, Paths14439<T[K], Prev14439[D]>> : never }[keyof T]
  : never;

type Prev14439 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14439<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14439 {
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

type ConfigPaths14439 = Paths14439<NestedConfig14439>;

interface HeavyProps14439 {
  config: DeepPartial14439<NestedConfig14439>;
  path?: ConfigPaths14439;
}

const HeavyComponent14439 = memo(function HeavyComponent14439({ config }: HeavyProps14439) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14439) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14439 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14439: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14439.displayName = 'HeavyComponent14439';
export default HeavyComponent14439;
